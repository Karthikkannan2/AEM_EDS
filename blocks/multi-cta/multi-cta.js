export default function decorate(block) {
  const [eyebrow, heading, description, legal, button] = [...block.children];

  eyebrow.classList.add('multi-cta-eyebrow');
  heading.classList.add('multi-cta-heading');
  description.classList.add('multi-cta-description');
  legal.classList.add('multi-cta-legal');
  button.classList.add('multi-cta-button');
}