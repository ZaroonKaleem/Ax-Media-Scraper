import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-banner',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './fp-banner.component.html',
    styleUrl: './fp-banner.component.scss'
})
export class FpBannerComponent implements OnInit, OnDestroy {
    // isToggled
    isToggled = false;
    
    // Typewriter effect variables
    fitnessWords: string[] = ['Fitness', 'Fashion', 'Travel', 'Beauty', 'Tech'];
    miamiWords: string[] = ['Los Angeles', 'Paris', 'Bali', 'Seoul', 'San Francisco'];
    currentFitnessWord: string = '';
    currentMiamiWord: string = '';
    private typingSpeed = 100;
    private erasingSpeed = 50;
    private wordDelay = 2000;
    private fitnessTimer: any;
    private miamiTimer: any;

    constructor(
        public themeService: CustomizerSettingsService,
        private ngZone: NgZone
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.startTypewriterEffect();
    }

    ngOnDestroy() {
        if (this.fitnessTimer) {
            clearTimeout(this.fitnessTimer);
        }
        if (this.miamiTimer) {
            clearTimeout(this.miamiTimer);
        }
    }

    private startTypewriterEffect() {
        let fitnessIndex = 0;
        let miamiIndex = 0;

        const typeFitness = () => {
            const word = this.fitnessWords[fitnessIndex];
            let charIndex = 0;

            const type = () => {
                if (charIndex < word.length) {
                    this.ngZone.run(() => {
                        this.currentFitnessWord += word.charAt(charIndex);
                    });
                    charIndex++;
                    this.fitnessTimer = setTimeout(type, this.typingSpeed);
                } else {
                    this.fitnessTimer = setTimeout(() => {
                        const erase = () => {
                            if (this.currentFitnessWord.length > 0) {
                                this.ngZone.run(() => {
                                    this.currentFitnessWord = this.currentFitnessWord.slice(0, -1);
                                });
                                this.fitnessTimer = setTimeout(erase, this.erasingSpeed);
                            } else {
                                fitnessIndex = (fitnessIndex + 1) % this.fitnessWords.length;
                                this.fitnessTimer = setTimeout(typeFitness, this.wordDelay);
                            }
                        };
                        erase();
                    }, this.wordDelay);
                }
            };

            type();
        };

        const typeMiami = () => {
            const word = this.miamiWords[miamiIndex];
            let charIndex = 0;

            const type = () => {
                if (charIndex < word.length) {
                    this.ngZone.run(() => {
                        this.currentMiamiWord += word.charAt(charIndex);
                    });
                    charIndex++;
                    this.miamiTimer = setTimeout(type, this.typingSpeed);
                } else {
                    this.miamiTimer = setTimeout(() => {
                        const erase = () => {
                            if (this.currentMiamiWord.length > 0) {
                                this.ngZone.run(() => {
                                    this.currentMiamiWord = this.currentMiamiWord.slice(0, -1);
                                });
                                this.miamiTimer = setTimeout(erase, this.erasingSpeed);
                            } else {
                                miamiIndex = (miamiIndex + 1) % this.miamiWords.length;
                                this.miamiTimer = setTimeout(typeMiami, this.wordDelay);
                            }
                        };
                        erase();
                    }, this.wordDelay);
                }
            };

            type();
        };

        this.ngZone.runOutsideAngular(() => {
            typeFitness();
            typeMiami();
        });
    }
}