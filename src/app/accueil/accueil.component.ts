import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [
    trigger('Grow', [
      state('inactive', style({
        transform: 'scale(0.1)',
        backgroundColor:'yellow'
      })),
      state('active', style({
        height: '200px',
        transform: 'scale(1)',
        backgroundColor:'yellow'
      })),
      transition('inactive => active', animate('800ms ease-in')),
    ])
  ]
  
})
export class AccueilComponent implements OnInit,AfterViewInit  {

typeSpeed!: number;
stringInterpolation : string = 
"Passionné d'informatique et doté d’une grande curiosité, je suis un developppeur java débutant.Je développe aussi bien en back qu'en front avec une appétence  pour le web.Je suis aujourd hui à la recherche d’une première mission java en région parisienne pour lancer ma carrière Développeur java. Vous souhaitez en savoir plus sur mon parcours et mes compétences ! ";

stateGrow: any;
obsTimer: Observable<number> = timer(1000);
insert: string = "";
h4 : string = "";
h5 : string = "";
active : boolean = false;


  @ViewChild("textElement")
  textElement!: ElementRef;

  @ViewChild("headElementh5")
  headElementh5!: ElementRef;

  @ViewChild("headElementh4")
  headElementh4!: ElementRef;

  @ViewChild("headElementh4")
  activeElement!: ElementRef;

  // @ViewChild("blinkElement")
  // blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "You Can...",
    "Write Anything You want...",
    "SBZ 🍻 Enjoy 🍸🍻🍺🍷🍹"
  ];
  @Input() textColor = "white";
  @Input() textalign = "justify";
  @Input() fontSize = "20px";
  @Input() blinkWidth = "2px";
  @Input() typingSpeedMilliseconds = 30;
  private i = 0;
 

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('Hello world!');
  
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.textElement.nativeElement, div);
  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffectHead();
    setTimeout (() => this.typingEffect(),2000)
    // this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );
    // this.renderer.setStyle(
    //   this.textElement.nativeElement,
    //   "font-size",
    //   this.fontSize
    // );
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "text-align",
      this.textalign
    );

    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");


    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "border-right-width",
    //   this.blinkWidth
    // );
    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "border-right-color",
    //   this.textColor
    // );
    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   "font-size",
    //   this.fontSize
    // );
  }

  
  private typingEffectHead(): void {
  
    const h5 = "Bonjour, je suis Haroon ILIASSE ";
    const h4 = "Developpeur web & Java ";
 
    const h5_split = h5.split("");
    const h4_split = h4.split("");
    // this.renderer.setProperty(this.textElement.nativeElement,"display","none");
    const loopTyping = () => {
      if (h5_split.length > 0) {

        this.renderer.setProperty(this.headElementh5.nativeElement,"innerHTML", this.h5 );
        this.h5 += h5_split.shift();

        // console.log("length h5_split " + h5_split.length);
        // console.log(" h5 " + this.h5);
      }
      setTimeout(loopTyping, 30);
      
    this.renderer.setStyle(this.headElementh5.nativeElement,"display","inline-block");
   
    };
     const loopTypingh4 = () => {
        if (h4_split.length > 0) {
            this.renderer.setProperty(this.headElementh4.nativeElement,'innerHTML', this.h4);
            this.h4 += h4_split.shift();
            console.log("length h4_split " + h4_split.length);
            console.log(" h4 " + this.h4);
        }
        setTimeout(loopTypingh4, 30);
        
    this.renderer.setStyle(this.headElementh4.nativeElement,"display","inline-block");
     };
    loopTyping();
    setTimeout(() => loopTypingh4(),1000);

  }

  private typingEffect(): void {
  
    // this.active = true;
    //  this.renderer.setProperty(this.activeElement.nativeElement,"opacity","0");
    const word = this.wordArray[this.i].split("");
    const word_string = this.stringInterpolation.split("");

    const loopTyping = () => {
      if (word_string.length > 0) {
        // this.textElement.nativeElement.innerHTML = word_string.shift();
        this.renderer.setProperty(this.textElement.nativeElement,"innerHTML", this.insert )
        this.insert += word_string.shift();
        // console.log("length word " + word_string.length);
        // console.log(" word_string " + word_string);
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
      // this.renderer.setStyle(this.textElement.nativeElement,"display","inline-block");
   
    };
    loopTyping();
  }
}
