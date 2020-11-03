export function registerComponents(app) {
  // Get all .vue files within `src/components/app`
  const requireComponent = require.context("@/components", true, /\.vue$/);

  for (const file of requireComponent.keys()) {
    const componentConfig = requireComponent(file);

    app.component(
      componentConfig.default.name,
      componentConfig.default || componentConfig
    );
  }
}
