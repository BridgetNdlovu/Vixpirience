import { useState, useEffect, useCallback, useRef } from 'react';

let toastTimeout;

export default function Toast() {
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);
  const msgRef = useRef('');

  const show = useCallback((message) => {
    msgRef.current = message;
    setMsg(message);
    setVisible(true);
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => setVisible(false), 2600);
  }, []);

  useEffect(() => {
    window.__vxToast = show;
    return () => { delete window.__vxToast; };
  }, [show]);

  return (
    <div className={`toast${visible ? ' is-visible' : ''}`}>
      {msg}
    </div>
  );
}

export function showToast(msg) {
  if (window.__vxToast) window.__vxToast(msg);
}
