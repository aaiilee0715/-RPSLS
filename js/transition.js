Barba.Pjax.start();


let FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        /**
    * This function is automatically called as soon the Transition starts
    * this.newContainerLoading is a Promise for the loading of the new container

    */
        // As soon the loading is finished and the old page is faded out,new container will come in
        Promise
            .all([this.newContainerLoading, this.fadeOut()]) //old will fade out
            .then(this.fadeIn.bind(this)); //this fade in code will run
    },
    fadeOut: function () {

    },

    fadeIn: function () { //the rule of game page should fad in
        this.newContainer.classList.add("slide-in"); //rule of game

        let that = this; //context will change so creating new variable

        this.newContainer.addEventListener("animationend", function () { //detect when animation ends on the new container
            that.newContainer.classList.remove("slide-in");
            that.done();
        });
    }
    });

    /**
    * Next step, you have to tell Barba to use the new Transition
    */
    Barba.Pjax.getTransition = function () {
        /**
    * Here you can use your own logic!
    * For example you can use different Transition based on the current page or link...
    */
        return FadeTransition;
    };

