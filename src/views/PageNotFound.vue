<template>
  <div>
    <div class="container">
      <div class="terminal">
        <div class="prompt"> The page 
            <span class="path">{{ `"${$route.path}"` }}</span> you requested cannot be found.</div>
        <div class="prompt"> Try command list below:</div>
        <div class="prompt"> eth => eth analysis</div>
        <div class="prompt"> defi => defi market</div>
        <div class="prompt new-outpt"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
@keyframes cursor-blink{
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.container {
  padding-top: 48px;
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100vw;
}

.terminal {
  position: relative;
  padding: 4%;
}

.path {
    color: #F06292;
    text-decoration: underline;
}

.prompt {
  color: #1b1b1b;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 0 0 2px rgba(#1b1b1b, 0.75);
  line-height: 1;
  margin-bottom: 0.75em;
}

.prompt::before {
  content: "> ";
  display: inline-block;
}

.new-outpt {
  display: inline-block;
}

.new-outpt:after {
  display: inline-block;
  vertical-align: -0.15em;
  width: 0.75em;
  height: 1em;
  margin-left: 5px;
  background: #1b1b1b;
  box-shadow: 1px 1px 1px rgba(#1b1b1b,0.65), -1px -1px 1px rgba(#1b1b1b,0.65), 1px -1px 1px rgba(#1b1b1b,0.65), -1px 1px 1px rgba(#1b1b1b,0.65);
  content: '';
  animation: 1s cursor-blink infinite;
}
</style>