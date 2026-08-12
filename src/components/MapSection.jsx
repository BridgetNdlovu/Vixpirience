import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ACTIVITIES } from '../data/activities';
import { MAP_COLORS } from '../data/mapColors';
import { money } from '../utils/helpers';

const CATEGORIES = [...new Set(ACTIVITIES.map((a) => a.category))];
const FILTERS = [
  { id: 'all', label: 'All' },
  ...CATEGORIES.map((c) => ({
    id: c,
    label: c.charAt(0).toUpperCase() + c.slice(1)
  }))
];

const colorOf = (a) => MAP_COLORS[a.category] || '#FFC42D';
const unitOf = (a) => (a.category === 'stay' ? 'night' : 'person');

function pinIcon(color, active = false) {
  return L.divIcon({
    className: 'map-pin-wrap',
    html: `<span class="map-pin${active ? ' is-active' : ''}" style="--pin:${color}"></span>`,
    iconSize: [28, 32],
    iconAnchor: [14, 26],
    popupAnchor: [0, -28]
  });
}

export default function MapSection() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef(new Map());
  const listRef = useRef(null);
  const didInit = useRef(false);
  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(null);

  const visible = filter === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter((a) => a.category === filter);

  useEffect(() => {
    if (mapInstance.current || !mapRef.current) return;
    const map = L.map(mapRef.current, { scrollWheelZoom: false })
      .fitBounds(L.latLngBounds(ACTIVITIES.map((a) => a.coords)), { padding: [36, 36] });
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    L.circleMarker([-17.9243, 25.8572], {
      radius: 7,
      color: '#0B1F3A',
      weight: 2,
      fillColor: '#FFC42D',
      fillOpacity: 1
    }).addTo(map).bindPopup('<strong>Victoria Falls</strong><br><span style="font-size:12px">Mosi-oa-Tunya — the smoke that thunders</span>');

    return () => {
      map.remove();
      mapInstance.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();
    setActiveId(null);

    const positions = [];
    visible.forEach((a) => {
      const color = colorOf(a);
      const marker = L.marker(a.coords, { icon: pinIcon(color) }).addTo(map);
      marker.bindPopup(`
        <div class="map-pop">
          <span class="map-pop-tag" style="--tag:${color}">${a.tag}</span>
          <strong>${a.name}</strong>
          <span class="map-pop-meet">${a.meet}</span>
          <span class="map-pop-price">${money(a.price)}<small> / ${unitOf(a)}</small></span>
        </div>
      `);
      marker.on('click', () => setActiveId(a.id));
      markersRef.current.set(a.id, marker);
      positions.push(a.coords);
    });

    if (listRef.current) listRef.current.scrollTop = 0;

    if (didInit.current) {
      if (positions.length === 1) {
        map.flyTo(positions[0], 13.5, { duration: 0.8 });
      } else {
        map.fitBounds(L.latLngBounds(positions), { padding: [40, 40], duration: 0.8 });
      }
    }
    didInit.current = true;
  }, [filter]);

  useEffect(() => {
    markersRef.current.forEach((m, id) => {
      const a = ACTIVITIES.find((x) => x.id === id);
      if (a) m.setIcon(pinIcon(colorOf(a), id === activeId));
    });
  }, [activeId]);

  const handleSelect = (a) => {
    setActiveId(a.id);
    const marker = markersRef.current.get(a.id);
    if (marker) {
      marker.openPopup();
      mapInstance.current.flyTo(a.coords, 13.5, { duration: 0.8 });
    }
  };

  return (
    <section className="map-section" id="map">
      <div className="section-head">
        <p className="eyebrow eyebrow-dark">Know before you go</p>
        <h2>Find your meeting point</h2>
        <p className="section-sub">Every activity departs from a fixed point around the Falls. Filter a category, then tap a pin or a listing to zoom in.</p>
      </div>

      <div className="map-filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${filter === f.id ? ' is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="map-wrap">
        <div id="leafletMap" ref={mapRef} />
        <aside className="map-side">
          <div className="map-side-head">
            <h3>Meeting points</h3>
            <span>{visible.length} {visible.length === 1 ? 'activity' : 'activities'}</span>
          </div>
          <div className="map-list" ref={listRef}>
            {visible.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`map-item${activeId === a.id ? ' is-active' : ''}`}
                onClick={() => handleSelect(a)}
                onMouseEnter={() => setActiveId(a.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <span className="map-item-dot" style={{ background: colorOf(a) }} />
                <span className="map-item-info">
                  <span className="map-item-name">{a.name}</span>
                  <span className="map-item-meet">{a.meet}</span>
                </span>
                <span className="map-item-price">{money(a.price)}<small>{unitOf(a)}</small></span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
