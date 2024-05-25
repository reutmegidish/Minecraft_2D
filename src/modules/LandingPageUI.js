const LandingPageSection = () => {
  return `<section
      class="landing-page-section flex justify-content align-items relative"
    >
      <img
        class="mincraft-page-land"
        src="assets/images/mincraft_page_land.png"
        alt="mincraft page land"
      />
      <div class="game-instruction-container flex column align-items absolute">
        <p class="game_x vt323-regular">
          In this 2D Minecraft game, your goal is to build and manage a custom
          world using different tools to gather resources and place tiles.
          <br />
          Select the Axe, Pickaxe, or Shovel to remove specific tiles and
          collect them in your inventory. <br />
          Use the collected tiles to create and modify your world, and reset the
          game anytime to start anew. <br />
          Enjoy the creative freedom and explore endless possibilities!
        </p>
        <button class="play-game-btn vt323-regular">Play Game</button>
      </div>
    </section>`;
};

export default LandingPageSection;
