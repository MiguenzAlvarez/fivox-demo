import { isDemoMode } from './mode';

export function DemoModeNotice() {
  if (!isDemoMode) return null;
  return <div className="demo-mode-notice" role="status"><i className="bi bi-stars" aria-hidden="true" /> <span>Modo demostración · Los cambios se mantienen solo en esta visita.</span></div>;
}
