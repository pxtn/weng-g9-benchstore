var companyComponent = Vue.component("company", {
  template: `
    <div class="content">
      <div class="main">
        <div class="tile">
          <p class="company__heading">Firmendaten</p>
          <form class="form">
            <ul>
              <li>
                <label for="name">Firmenname:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxlength="53"
                  value="Tante Emmas Spezialitäten"
                />
              </li>
              <li>
                <label for="adresse">Adresse:</label>
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  maxlength="53"
                  value="Pionierstrasse 1"
                />
              </li>
              <li>
                <label for="plz">PLZ:</label>
                <input
                  type="number"
                  name="plz"
                  id="plz"
                  maxlength="4"
                  value="8400"
                />
              </li>
              <li>
                <label for="ort">Ort:</label>
                <input
                  type="text"
                  name="ort"
                  id="ort"
                  maxlength="53"
                  value="Winterthur"
                />
              </li>
              <li>
                <label for="mitarbeiter">Mitarbeiter:</label>
                <input
                  type="number"
                  name="mitarbeiter"
                  id="mitarbeiter"
                  maxlength="6"
                  value="3"
                />
              </li>
              <li>
                <label for="flaeche">Ladenfläche:</label>
                <input
                  type="number"
                  name="flaeche"
                  id="flaeche"
                  maxlength="6"
                  placeholder="in m2"
                  value="65"
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
          <p class="company__heading">Weitere Informationen</p>
          <p><a>❯ Über uns</a></p>
          <p><a>❯ AGB</a></p>
          <p><a>❯ Impressum</a></p>
        </div>
      </div>
    </div>
  `,
});
