
const categoryHTML = `
<h4 class="category-title margin-top-2" data-aos="fade-up">[TITLE]</h4>
<div class="links-container">
            [LINKS]
</div>
`;

const singleLinkHTML = `<a href="[URL]" data-aos="fade-up" class="w3-button w3-round-xlarge w3-theme-l1 w3-border link" target="_blank">
<span class="[ICON]"></span>  [TITLE]
</a>`;

const singleBadge = `<div class="badge" data-aos="fade-up"><span class="[ICON]"></span></div>`;

const links = [
    {
        title: 'Social Networks',
        links: [
            {
                title: 'Facebook',
                icon: 'zi-facebook2',
                url: 'https://www.facebook.com/thearkhive'
            },
            {
                title: 'Instagram',
                icon: 'zi-instagram2',
                url: 'https://www.instagram.com/daniloramirezcr_thearkhive/'
            },
            {
                title: 'Twitter',
                icon: 'zi-twitter',
                url: 'https://twitter.com/arkofdan'
            },
            {
                title: 'LinkedIn',
                icon: 'zi-linkedin2',
                url: 'https://www.linkedin.com/in/daniloramirezcr/'
            }
        ]
    },
    {
        title: 'Development',
        links: [
            {
                title: 'Github',
                icon: 'zi-github',
                url: 'https://github.com/danilor'
            },
            {
                title: 'Replit',
                icon: 'zi-code',
                url: 'https://replit.com/@arkofdan'
            },
            {
                title: 'Fiddle',
                icon: 'zi-code',
                url: 'https://jsfiddle.net/user/daniloramirezcr/fiddles/'
            },
            {
                title: 'Play Store The Arkhive',
                icon: 'zi-android',
                url: 'https://play.google.com/store/apps/developer?id=The+Arkhive'
            },

        ]
    },
    {
        title: 'Art',
        links: [
            {
                title: 'Devianart',
                icon: 'zi-deviantart',
                url: 'https://www.deviantart.com/daniloramirezcr/gallery'
            }
        ]
    },
    {
        title: 'Gaming',
        links: [
            {
                title: 'BoardGameGeek',
                icon: 'zi-dice',
                url: 'https://boardgamegeek.com/user/arkofdan'
            },
            {
                title: 'PlayStation',
                icon: 'zi-playstation',
                url: 'https://psnprofiles.com/arkofdan'
            },
            {
                title: 'Nintendo Online',
                icon: 'zi-nintendoswitch',
                url: 'https://my.nintendo.com/@arkofdan'
            },
            {
                title: 'Steam',
                icon: 'zi-steam-square',
                url: 'https://steamcommunity.com/id/arkofdan'
            },
            {
                title: 'Epic',
                icon: 'zi-epicgames',
                url: 'https://store.epicgames.com/en-US/u/7b3c2e4cdc8d40519893d71d94cdf894'
            },


        ]
    },
    {
        title: 'Blogs',
        links: [
            {
                title: 'The AI Experiment',
                icon: 'zi-blogger1',
                url: 'https://theaiexperiment.blogspot.com'
            },
        ]
    },
];


const tags = [
    'zi-cisco','zi-googleanalytics','zi-paypal',
    'zi-composer', 'zi-jenkins','zi-npm',
    'zi-dev-dot-to','zi-dot-net','zi-android','zi-flutter','zi-firebase','zi-bootstrap','zi-css3','zi-html5', 'zi-angular','zi-cplusplus', 'zi-csharp','zi-javascript','zi-typescript', 'zi-sass','zi-php','zi-laravel',
    'zi-windows2','zi-linux','zi-debian', 'zi-gnome', 'zi-gnu',
    'zi-jetbrains','zi-visualstudiocode','zi-microsoftoffice','zi-mysql',
    'zi-git','zi-github2','zi-bitbucket', 'zi-docker', 'zi-dropbox',
    'zi-adobephotoshop', 'zi-evernote', 'zi-filezilla',
    'zi-discord', 'zi-ebay', 'zi-amazon1', 'zi-gog-dot-com', 'zi-kickstarter', 'zi-mojang', 'zi-origin', 'zi-ubisoft'

];

class Ball{
    _size = 0;
    _id = 0;
    _builtId = '';
    _color = 'rgba(255,255,255,0.5)';
    _completed = false;
    _customClass = 'animatedStart';
    constructor(){
        this._id = this.getRandomInt(10000,99000);
        this._builtId = `star-${this._id}`;
        this._size = this.getRandomInt(4,9);
        this.print();
        this.animate();
    }

    getScreenSize(){
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }

    getStyles(){
        return `border-radius: 50%; width: ${this._size}px; height: ${this._size}px; background-color: ${this._color}; position: fixed; z-index: -1; top: ${this.getScreenSize().height}px; left: ${this.getRandomInt(10,this.getScreenSize().width-10)}px;`;
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    print(){
        const div = document.createElement('div');
        div.setAttribute('id', this._builtId );
        div.setAttribute('style', this.getStyles());
        div.classList.add(this._customClass);
        document.querySelector('body').appendChild(div);
    }

    animate(){
        const target = [
            { top: "-10px" }
        ];
        const timing = {
            duration: this.getRandomInt(3000,14000),
            iterations: 1,
        };
        const animation = document.getElementById(this._builtId).animate(target, timing);
        animation.onfinish = () => {
            document.getElementById(this._builtId).remove();
            this._completed = true;
        };
    }

    isCompleted(){
        return this._completed;
    }
}

class BallsController{
    _maxElements = 100;
    _elements = [];
    _timeInterval = {
        min:10,
        max: 1000
    }

    constructor() {
    }

    execute(){
        setTimeout(()=>{
            this.removeUnusedElements();
            if(this._elements.length < this._maxElements){
                this._elements.push(new Ball());
            }
            this.execute();
        }, this.getRandomInt(this._timeInterval.min,this._timeInterval.max));
    }

    removeUnusedElements(){
        for(let i = 0; i < this._elements.length; i++){
            if(this._elements[i].isCompleted()){
                delete this._elements[i];
            }
        }
        this._elements = this._elements.filter((star)=> star !== undefined);
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

}

/**
 * This will fill the links
 */
function fillLinks(){
    let html = '';
    links.forEach((category)=>{
        let linksHTML = '';
        category.links.forEach((link)=>{
            linksHTML += singleLinkHTML
                .replace('[URL]', link.url)
                .replace('[TITLE]', link.title)
                .replace('[ICON]', link.icon)
            ;
        });
        html += categoryHTML
            .replace('[TITLE]', category.title)
            .replace('[LINKS]', linksHTML);
    });
    $("#linksSpace").html(html);
}

function fillBadges(){
    let html = '';
    tags.forEach((tag)=>{
        html += singleBadge.replace('[ICON]', tag);
    });
    $("#badgesSpace").html(html);
}

/**
 * This will fill the year

 */
function fillYear(){
    const dated = new Date();
    const year = dated.getFullYear();
    $("#year").html(year);
}

/**
 * Log shortcut
 * @param t
 * @private
 */
function _log(t){
    // console.log(t);
}

/**
 * Window ready
 */
$(window).ready(()=>{
    _log('Window ready');
    fillLinks();
    fillBadges();
    fillYear();
    AOS.init({
        offset: 60
    });
    const starController = new BallsController();
    starController.execute();
});
