---
title: "Jak bude vypadat nový park na Rohanském ostrově? Podívejte se"
author: Piráti Praha 8
image: posts/vizualizace/park-rohansky-ostrov/Rohan4.jpg
tags: [Park Maniny, Životní prostředí, IPR]
fancybox:
  - name: Vizualizace nového parku na Rohanském ostrově
    img:
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan1.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan2.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan3.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan4.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan5.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
      - { src: posts/vizualizace/park-rohansky-ostrov/Rohan6.jpg, title: Vítězný návrh parku (OMGEVING+FISER+VRV+SINDLAR (BE/CZ)) }
---

**Na území 56 hektarů vznikne povodňový park, který propojí člověka s řekou, zachová tamní biodiverzitu a efektivně přispěje k protipovodňové ochraně města.**

>"Holešovický meandr je unikátním přírodním jevem. V rámci Pražské kotliny i celých Čech. Na celém toku Vltavy nenajdeme podobný prostor takto velkoryse utvářený v tak náhlém kontrastu k hluboce sevřeným kaňonům na jih i sever od Prahy. Sílu původního krajinného obrazu zásadně přetvořeného regulací říčního koryta navrhujeme připomenout kouskem "mezivodí" po letech opět definovaného dynamickým rytmem řeky. Nabízíme hybridní prostorovou mozaiku nepředurčených příběhů pokaždé prožívaných trochu jinak," píše [Institut plánování a rozvoje hl. města Prahy na svém webu](https://iprpraha.cz/projekt/38/rohansky-ostrov).

{% for galery in page.fancybox %}
<div class="mt-4">
  <h3>{{ galery.name }}</h3>
  <div class="grid grid-cols-4 gap-4">
  {% for item in galery.img %}
    <div class="">
      <a data-fancybox="gallery" href="{% asset '{{ item.src }}' @path %}" data-caption="{{ item.title }}">{% asset '{{ item.src }}' magick:resize='200x150^' magick:gravity='center' magick:crop='200x150+0+0' class="rounded" %}</a>
    </div>
  {% endfor %}
  </div>
</div>
{% endfor %}
<br/>

Na tento a dalších dvacet čtyři projektů se můžete těšit v nové výstavě v CAMP - Centrum architektury a městského plánování, která začne 22. 9. 2023 slavnostní vernisáží. Výsledkům soutěžního dialogu se v CAMP věnuje i samostatná expozice v Bílém sále. Najdete zde návrhy 4 soutěžních týmů a vyjádření poroty, které přiblíží, jak byly návrhy hodnoceny a v čem spočívá jejich kvalita.

### Hodnocení komise
<div class="inline-flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
  <div class="inline-flex flex-col space-y-2">
    <span class="alert alert--black">
      <i class="alert__icon ico--pirati"></i>
      <span><b>Tramvajový okruh</b><br />Plánovaný tramvajový okruh propojí čtveřici nádraží - Podbabu, Dejvice, Smíchovské nádraží a Eden, a také všechny linky metra. V současné době chybí 19 kilometrů tramvajových tratí k jeho dokončení. Celkové náklady odhadují Piráti na 14 miliard korun. Projekt by podle nich mohl být dokončen v roce 2035. Okruh by měl nabídnout alternativu k autům - na jihu například k jízdě po Jižní spojce. </span>
    </span>
  </div>
</div>