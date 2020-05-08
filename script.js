document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('div[id^=mn-]')];

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (![...btn.classList].includes('mn-active')) {
        btn.classList.add('mn-active', 'af-active');
        buttons
          .filter((_, j) => j !== i)
          .forEach((b) => b.classList.remove('mn-active', 'af-active'));

        const containerId = btn.getAttribute('cnt');

        const containers = document.querySelectorAll(`div[id^=cnt-]`);

        [...containers].forEach((container) => {
          if (containerId === container.id) {
            container.classList.remove('cnt-hidden');
          } else {
            container.classList.add('cnt-hidden');
          }
        });
      }
    });
  });
});
