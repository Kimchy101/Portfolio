<template>
    <div>
        <v-card class="pa-2 ma-2">
            <v-layout align-center column>
            <v-card-title class="display-2 green--text font-weight-light"><i>Robot Tale</i></v-card-title>
            <UnderConstruction item="Section"/>
            <v-card-text class="bodyTxt">
                This was a major project during my beginning years of highschool.
                It was the catalyst for my experiences with the <a href="https://unity.com/">Unity</a> engine and the C# language.
                Out of all the projects I have worked on, this was likely the most time consuming.
                Here is a quick file search of all the scripts coded for the project:
            </v-card-text>
            <img style="max-width: 500px" class="sizedContent" src="~/static/robot_tale_scripts.png">
            <v-card-text class="bodyTxt">
                In total there are 158 .cs files, not including the ones deleted over time.
            </v-card-text>
            </v-layout>
        </v-card>
                <v-card class="pa-2 ma-2">
            <v-layout align-center column>
            <v-card-title class="display-2 green--text font-weight-light"><i>Hot Hops</i></v-card-title>
            <img style="max-width: 500px" class="sizedContent" src="~/static/hot_hops_img.png">
        
            <v-card-text class="bodyTxt">
                This was a small project during a freshman year class where I my team was assigned to develop a video game. 
                Unlike many of the other games listed here, this game was complete and is still available for download.
                <br><br>
                You can get the game via this <a href='https://drive.google.com/file/d/1qYiRgzyXv6T9OSDOyFPyUnAUPeyjuvpZ/view?usp=sharing' download>link</a>.
                <br>
                Controls are simple: space key to jump and enter to play/restart. Avoid the fox.
            </v-card-text>
            </v-layout>
        </v-card>
        <v-card class="pa-2 ma-2">
            <v-layout align-center column>
            <v-card-title class="display-2 green--text text-xs-center font-weight-light"><i>Rocket Mash</i></v-card-title>

            <v-carousel class="sizedContent">
                <v-carousel-item>
                    <p class="carouselText">Early development</p>
                    <img class="rmsImg" src='~/static/rocket_mash_screenshots/rms_old.png'>
                </v-carousel-item>
                <v-carousel-item>
                    <p class="carouselText">Cutscene</p>
                    <img class="rmsImg" src='~/static/rocket_mash_screenshots/rms_decision.png'>
                </v-carousel-item>
                <v-carousel-item>
                    <p class="carouselText">Later development</p>
                    <img class="rmsImg" src='~/static/rocket_mash_screenshots/rms_level_one.png'>
                </v-carousel-item>
                <v-carousel-item>
                    <p class="carouselText">Old UI</p>
                    <img class="rmsImg" src='~/static/rocket_mash_screenshots/rms_ui.png'>
                </v-carousel-item>
            </v-carousel>
        
            <v-card-text class="bodyTxt">
                Of all my projects, this was probably the one that varied the most.
                During my middle school years, I picked up on a tool called Clickteam Fusion 2.5.
                It is a simple, code-free game engine.
                This tool was my main introduction to programming.
                In total I have 951 hours on record for the software.
            </v-card-text>
            <img class="sizedContent" style="max-width: 300px" src="~/static/fusion_hours.png">
            <v-card-text class="bodyTxt">
                Rocket Mash is the accumulation of these hours.
                It represents my early experimentation and struggles in game design.
                For all its flaws, the game is the foundation of my game developer experience.
            </v-card-text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Udk3hAFYPy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-text class="bodyTxt text-xs-center">
                A video from an earlier stage of development.
            </v-card-text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CTEYNMktgFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-text class="bodyTxt text-xs-center">
                And another from a later stage of development.
            </v-card-text>
            </v-layout>
        </v-card>
    </div>
</template>

<style scoped>
    .sizedContent
    {
        width: 80%;
    }
    .rmsImg
    {
        height: 100%;
        width: auto;
    }
    .carouselText
    {
        position: absolute;
        left: 10px;
        bottom: 35px;
        font-size: 40px;
        font-weight: 200;
        color: lightgray;
    }
</style>
<script>
import UnderConstruction from '~/components/Under Construction.vue'
export default {

      components: {
    UnderConstruction
  },
    data() {
        return {
            rocketMashImages: [{src:"~/static/rocket_mash_screenshots/rms_old.png", caption:"Hello World"}, {src:"rms_decision.png", caption: "H"}]
        }
    }
}
</script>
