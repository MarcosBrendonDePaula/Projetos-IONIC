import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronomo',
  templateUrl: './metronomo.page.html',
  styleUrls: ['./metronomo.page.scss'],
})
export class MetronomoPage implements OnInit {

  static obj:any = null;

  bpm : number  = 60;
  bpm_limit : number = 500;
  
  audioContext: any;
  audioBuffer : any;
  audioSource : any;

  Vars:any = {
    playing     : false,
    lastTick    : 0,
    proxTick    : 0,
    step_time   : 60000/60,
    initAs      : 0
  }

  grid_class : any = {
    'ion-grid':true,
    'ion-align-items-center':true
  };

  tap_bpm : any = {
    tap_times: [],
    last_time: undefined,
  };

  constructor() {
    MetronomoPage.obj = this;
  }

  async ngOnInit() {
    this.audioContext = new AudioContext();
    this.audioBuffer = await fetch("assets/metronomo/audio/tick.wav")
    .then(res => res.arrayBuffer())
    .then(ArrayBuffer => this.audioContext.decodeAudioData(ArrayBuffer));
    MetronomoPage.obj = this;
  }

  ngOnDestroy() {
    if(this.Vars.playing) {
      window.cancelAnimationFrame(this.Vars.anim_frame);
      this.Vars.playing = false
      this.Vars.lastTick = 0;
      this.Vars.proxTick = 0;
    }
  }

  async playTick() {
    this.audioSource = this.audioContext.createBufferSource();
    this.audioSource.buffer = this.audioBuffer
    this.audioSource.connect(this.audioContext.destination);
    this.audioSource.start();
  }
  

  //Atualiza o tempo do proximo tick para o timestamp atual.
  prepLoop(timestamp) {
    let This = MetronomoPage.obj
    This.Vars.proxTick = (timestamp + This.Vars.step_time)
    This.Vars.anim_frame = window.requestAnimationFrame(This.loop)
  }

  loop(timestamp) {
      let This = MetronomoPage.obj
      This.Vars.anim_frame = window.requestAnimationFrame(This.loop)
      if(timestamp >= This.Vars.proxTick){
        This.playTick();
        This.Vars.proxTick = (timestamp + This.Vars.step_time) - (timestamp - This.Vars.proxTick)
        This.Vars.lastTick = timestamp
      }
  }
  
  metronomeSwitch() {
    if(this.Vars.playing) {
      window.cancelAnimationFrame(this.Vars.anim_frame);
      this.Vars.playing = false
      this.Vars.lastTick = 0;
      this.Vars.proxTick = 0;
      return
    }
    this.Vars.playing = true
    this.Vars.anim_frame = window.requestAnimationFrame(this.prepLoop)
  }

  bpmChange() {
    this.Vars.step_time = (60000/this.bpm)
  }

  addBpm() {
    if(this.bpm == this.bpm_limit){
      return;
    }
    this.bpm += 1;
    this.bpmChange()
  }

  remBpm() {
    if(this.bpm == 1){
      return;
    }
    this.bpm -= 1;
    this.bpmChange()
  }

  bpmRangeEdit(event) {
    this.bpm = event.detail.value
    this.bpmChange()
  }

  getAverage(Values, Precision) {
    let ticks = Values;
    let n = 0;
    
    for (let i = ticks.length-1; i >= 0; i--) {
      n += ticks[i];
      if (ticks.length - i >= Precision) break;
    }
    return n / 5;
  }

  TapBpm() {
    this.tap_bpm.tap_times.push(new Date().getTime());
    let delays = []
    if(this.tap_bpm.tap_times.length >= 2) {
      for(let t=1;t<this.tap_bpm.tap_times.length;t++){
        delays.push(Math.round( 60 / (this.tap_bpm.tap_times[t] / 1000 - this.tap_bpm.tap_times[t-1] / 1000) * 100) / 100)
      }
      this.bpm = Math.round(this.getAverage(delays, 5));
    }
    this.playTick()
  }

  ResetTapBpm() {
    this.tap_bpm.tap_times = []
    this.bpm = 60;
  }

}
