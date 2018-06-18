import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    admobid = {
        banner: 'ca-app-pub-8656353838250831/8736961143',
        interstitial: 'ca-app-pub-8656353838250831/5423992979',
        video: 'ca-app-pub-8656353838250831/3839857689'
    };

  constructor(
      public navCtrl: NavController,
      public admob: AdMobFree) {

  }

    // show banner ads
    showBannerAds() {
        const bannerConfig: AdMobFreeBannerConfig = {
            id: this.admobid.banner,
            isTesting: true,
            autoShow: false
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare()
            .then(() => {
                this.admob.banner.show();
    
            }).catch(e => console.log('Banner Ads Error: ' + e));
    }

    // hide banner ads
    hideBannerAds() {
        this.admob.banner.hide();
    }

    // Banner Ads in Top
    bannerAdsTop() {
        const bannerConfig: AdMobFreeBannerConfig = {
            id: this.admobid.banner,
            isTesting: true,
            autoShow: false,
            bannerAtTop: true
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare()
            .then(() => {
                this.admob.banner.show();
        
            }).catch(e => console.log('Banner Ads Error: ' + e));
    }

    // Banner Ads in Buttom
    bannerAdsButtom() {
        const bannerConfig: AdMobFreeBannerConfig = {
            id: this.admobid.banner,
            isTesting: true,
            autoShow: false,
            bannerAtTop: false
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare()
            .then(() => {
                this.admob.banner.show();
        
            }).catch(e => console.log('Banner Ads Error: ' + e));
    }


    showInterstitialAds() {
        const interstitialConfig: AdMobFreeInterstitialConfig = {
            id: this.admobid.interstitial,
            isTesting: true,
            autoShow: false
        };
        this.admob.interstitial.config(interstitialConfig);
        this.admob.interstitial.prepare()
            .then((res) => {
                console.log('Interstitial Ads Prepare is Ready: ' + JSON.stringify(res));
                // callback function
                this.admob.interstitial.isReady().then(res => console.log('Interstitial Ads isReady: ' + JSON.stringify(res))).catch(e => console.log('Interstitial Ads Error: ' + JSON.stringify(e)));
                this.admob.interstitial.show().then(res => console.log('Interstitial Ads Sowing Done: ' + JSON.stringify(res))).catch(e => console.log('Interstitial Ads Error: ' + JSON.stringify(e)));

            }).catch(e => console.log('Interstitial Ads Error: ' + e)); 
    }


    // show Reward Video ads
    showVideoAds() {
        const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
            id: this.admobid.video,
            isTesting: true,
            autoShow: false
        };
        this.admob.rewardVideo.config(rewardVideoConfig);
        this.admob.rewardVideo.prepare()
            .then((res) => {
                console.log('Video Ads Prepare is Ready: ' + JSON.stringify(res));
                // callback function
                this.admob.rewardVideo.isReady().then(res => console.log('Video Ads isReady: ' + JSON.stringify(res))).catch(e => console.log('Video Ads Error: ' + JSON.stringify(e)));
                this.admob.rewardVideo.show().then(res => console.log('Video Ads Sowing Done: ' + JSON.stringify(res))).catch(e => console.log('Video Ads Sowing Error: ' + JSON.stringify(e)));

            }).catch(e => console.log('RewardVideo Ads Error: ' + e)); 
    }



}
