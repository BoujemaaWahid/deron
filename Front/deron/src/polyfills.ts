//tslint:disable
import 'zone.js/dist/zone';  // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

declare global {
    interface Window {
        webkitAudioContext: typeof AudioContext
    }
}
if ( 'msGetUserMedia' in navigator )navigator['getUserMedia'] = navigator['msGetUserMedia']
else if ( 'mozGetUserMedia' in navigator )navigator['getUserMedia'] = navigator['mozGetUserMedia']
else if ( 'webkitGetUserMedia' in navigator )navigator['getUserMedia'] = navigator['webkitGetUserMedia']
else if ( 'getUserMedia' in navigator )navigator['getUserMedia'] = navigator['getUserMedia']
window.AudioContext = window.AudioContext || window.webkitAudioContext;  
(window as any)['global'] = window;