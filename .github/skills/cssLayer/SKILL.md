# Skill: cssLayer

## Standards
- Use modern CSS: flex, grid, prefer ems, use variables for all colors.
- Use modern CSS nesting.
- Use plain CSS files (no CSS-in-JS or CSS modules).
- Create a `main.css` under the `style` folder and import it in the root.
- Structure:
   - **style/setup/**: `var.css`, `typography.css`
   - **style/basics/**: `reset.css`, `helper.css`, `layout.css`, `base.css`, `button.css`
   - **style/cmps/**: Component-specific CSS files imported into `main.css`.
- No inline styles.
- Use lucide icons.

## Themes
- Support light and dark themes via CSS variables.
- Sync variables with the global store (Redux).