<template>
  <FullPageLayout>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="options" ref="fullpage">
        <div class="page" id="page1">
          <g-image id="logo" alt="engin33r" src="~/logo.svg" />
          <Corner @click.native="moveNext" />
        </div>
        <div class="page" id="page2">
          <div class="center-text">
            <h1>Hello!</h1>
            <p>My name is Ilya Gavrikov, but I go by EngiN33R online. I'm a software engineer, as well as a language and linguistics enthusiast.</p>
            <div style="margin-top: 1em;"></div>
            <p>I live to learn and to improve myself, always preferring taking on difficult challenges to comfortably coasting through the familiar.</p>
          </div>
          <Corner @click.native="moveNext" />
        </div>
        <div class="page" id="page3">
          <div class="center-text">
            <h1>Software</h1>
            <p>
              I've worked on many diverse projects in my nearly 10 years of doing programming: web, desktop and mobile apps, gamedev, backend and devops.
              Thanks to these opportunities, I'm able to bring a well-rounded set of skills and unique point of view to the table, whatever the project.
            </p>
            <div style="margin-top: 1em;"></div>
            <p>Java <Dot/> JS <Dot/> Kotlin <Dot/> Python <Dot/> PHP</p>
            <p>Spring <Dot/> React <Dot/> Android <Dot/> GraphQL <Dot/> Laravel <Dot/> AI/ML</p>
            <p>Docker <Dot/> Cloud <Dot/> DevOps</p>
          </div>
          <Corner @click.native="moveNext" />
        </div>
        <div class="page" id="page4">
          <div class="center-text">
            <h1>Languages</h1>
            <p>
              Human language has been a passion of mine since childhood, and aside from simple interest in languages, linguistics and etymology, I've also
              worked on translation and interpretation projects, including software i18n, conference talks, professional interpretation, as well as historical,
              technical and literary content.
            </p>
            <div style="margin-top: 1em;"></div>
            <p>English <Dot/> Russian <Dot/> Ukrainian <Dot/> German <Dot/> French</p>
          </div>
          <Corner @click.native="moveNext" />
        </div>
        <div class="page" id="page5">
          <div class="center-text">
            <h1>Talk to me</h1>
            <p>If you'd like to strike up a conversation, email me at <b>me@engi.io</b>.</p>
            <p>If you have a business inquiry, I'd appreciate it if you messaged me at <b>business@engi.io</b>.</p>
            <div style="margin-top: 1em;"></div>
            <p><a href="/CV.pdf">CV</a> <Dot/> <a href="https://github.com/Eng1N33R">GitHub</a></p>
          </div>
          <Corner @click.native="moveFirst" up />
        </div>
      </div>
    </div>
  </FullPageLayout>
</template>

<script>
import Dot from '~/components/Dot.vue'
import Corner from '~/components/Corner.vue'

export default {
  components: {
    Dot,
    Corner,
  },
  data: () => ({
    options: {
      start: 0,
      dir: 'v',
      beforeChange: (el, cur, next) => {
      },
      afterChange: (el, cur) => {
      }
    },
  }),
  methods: {
    moveNext() {
      this.$refs.fullpage.$fullpage.moveNext();
    },
    moveFirst() {
      this.$refs.fullpage.$fullpage.moveTo(0);
    }
  },
  metaInfo: {
    title: 'me'
  }
}
</script>

<style>
a[href] {
  color: #eee;
  text-decoration-color: #fd6104;
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page {
  position: relative;
  display: flex;
  align-items: center;
  color: #707272;
  font-size: 200%;
}

.page h1 {
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
}

@media only screen and (max-width: 768px) {
  .page p {
    font-size: 80%;
  }
}

@media only screen and (min-width: 992px) {
  .page p {
    font-size: 120%;
  }
}

.page h1, .page p {
  margin: 0;
}

#page1 {
  background: #eee;
}

#page2 h1 {
  color: #fd6104;
}

#page3 {
  background: #333;
  color: #eee;
}

#page3 h1 {
  color: #fd6104;
}

#page4 {
  background: #eee;
}

#page4 h1 {
  color: #fd6104;
}

#page5 {
  background: #333;
  color: #eee;
}

#page5 h1 {
  color: #fd6104;
}

.center-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 15%;
}

#page1 > img#logo {
  flex: 1;
  height: 80%;
}
</style>
