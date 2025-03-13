<style>
#headerLabel2 {
  font-size: 45;
  horizontal-align: center;
  color: #B2EBF2;
}

#headerLabel {
  font-size: 45;
  horizontal-align: center;
  padding-top: 75;
  color: #B2EBF2;
}

.header-template {
  background-color: #212121;
  background-image: url('~/images/mountains.png');
  background-size: cover;
  height: 200;
}

.body-template TextView {
  font-size: 20;
  padding: 5 15;
  border: none;
}

.anchor {
  height: 55;
  width: 100%;
  background-color: #616161;
}

#titleLabel {
  font-weight: bold;
  font-size: 25;
  padding: 5 15;
  color: #fff;

}
</style>

<template>
  <Page>
    <ParallaxView controlsToFade="headerLabel,headerLabel2">
      <ParallaxHeader class="header-template">
        <Label id="headerLabel" text="Parallax" />
        <Label id="headerLabel2" text="Component" />
      </ParallaxHeader>

      <ParallaxAnchored class="anchor">
        <Label id="titleLabel" text="Parallax Template" />
      </ParallaxAnchored>

      <ParallaxContent class="body-template">
        <TextView editable="false"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque, est in viverra vehicula, enim lacus fermentum mi, vel tincidunt libero diam quis nulla. In sem tellus, eleifend quis egestas at, ultricies a neque. Cras facilisis lacinia velit ut lacinia. Phasellus fermentum libero et est ultricies venenatis sit amet ac lectus. Curabitur faucibus nisi id tellus vehicula luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum est id nibh volutpat tempor. Phasellus sodales velit vel dui feugiat, eget tincidunt tortor sollicitudin. Donec nec risus in purus interdum eleifend. Praesent placerat urna aliquet orci suscipit laoreet. In ac purus nec sapien rhoncus egestas.">
        </TextView>
      </ParallaxContent>
    </ParallaxView>
  </Page>
</template>
