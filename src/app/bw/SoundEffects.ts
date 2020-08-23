export class SoundEffects {
    public static readonly effects = {
        startRecording: new Audio('assets/startRecording.mp3'),
        stopRecording: new Audio('assets/stopRecording.mp3'),
        sendMessage: new Audio('assets/sendMessage.mp3'),
        friendWrite: new Audio('assets/friendWrite.mp3'),
        notification: new Audio('assets/notification.mp3'),
        notifyMessage: new Audio('assets/notifyMessage.mp3'),
        whenCalling: new Audio('assets/whenCalling.mp3')
    }

    public static playWhenCalling(){
        this.effects.whenCalling.currentTime = 0
        this.effects.whenCalling.loop = true
        this.effects.whenCalling.play()
    }
    public static stopWhenCalling(){
        this.effects.whenCalling.pause()
    }
}