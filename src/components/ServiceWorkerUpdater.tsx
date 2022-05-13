import { useEffect, useState } from "react";
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

export function ServiceWorkerUpdater(): JSX.Element {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    console.log('onSWUpdate called');
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, []);

  // Show prompt to user. If user hits "REFRESH" then the new service worker is
  // put in control and the page reloads
  const reloadPage = () => {
    // We reload the page inside the serviceworker in its handler for
    // the SKIP_WAITING event
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });

    setShowReload(false);
  }

  return (
    <div>
      {showReload && (
        <div className='sw-update-container'>
          <div className='sw-update-helpbox'>
            <p>New content available:</p>
            <button className='sw-update-refresh-button' onClick={reloadPage}>
              REFRESH
            </button>
          </div>
        </div>
      )}
    </div>
  );
}