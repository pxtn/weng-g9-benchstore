var figuresComponent = Vue.component("figures", {
  template: `
    <div class="content">
      <div class="main">
        <div class="tile">
          <p class="figures__heading">Daten für den April 2020</p>
          <form class="form">
            <ul>
              <li>
                <label for="umsatz">Umsatz:</label>
                <input
                  type="number"
                  name="umsatz"
                  id="umsatz"
                  maxlength="12"
                  placeholder="in CHF"
                />
              </li>
              <li>
                <label for="ausgaben">Ausgaben:</label>
                <input
                  type="number"
                  name="ausgaben"
                  id="ausgaben"
                  maxlength="12"
                  placeholder="in CHF"
                />
              </li>
              <li>
                <label for="werbeausgaben">Werbeausgaben:</label>
                <input
                  type="number"
                  name="werbeausgaben"
                  id="werbeausgaben"
                  maxlength="12"
                  placeholder="in CHF"
                />
              </li>
              <li class="buttons">
                <button type="reset">Zurücksetzen</button>
                <button type="submit">Speichern</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="side-right">
        <div class="tile">
          <p class="figures__heading">Vorherige Monate</p>
          <p><a>❯ März 2020</a></p>
          <p><a>❯ Februar 2020</a></p>
          <p><a>❯ Januar 2020</a></p>
        </div>
      </div>
    </div>
  `,
});
