---
title: Jak bude vypadat Florenc v 21. století? Podívejte se! 
authorId: karel.ptacek
image: posts/2021-11-24-florenc21/florenc-karelptacek2.png
tags: [Florenc, Územní rozvoj, Veřejný prostor]
fancybox:
  - name: Jak bude vypadat Florenc?
    img:
      - { src: posts/2021-11-24-florenc21/florenc1.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc2.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc3.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc4.jpg, title: Budoucí podoba Florence podle architektů }  
      - { src: posts/2021-11-24-florenc21/florenc5.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc6.jpg, title: Budoucí podoba Florence podle architektů }
---

**Autobusové nádraží Florenc a přilehlé území směrem k Masarykovu nádraží čekají v budoucnu velké změny. Jak by mělo území vypadat vzejde z urbanistické soutěže. Institut plánování a rozvoje představil tři finální návrhy, ze kterých na začátku prosince vyberou vítěze.**

Připomeňme si, jaké vlastně bylo zadání. Soutěžní týmy musejí navrhnout ekonomicky, ekologicky a dopravně proveditelnou vizi revitalizace území. Mezi klíčové aspekty patří respektovat důležité pohledy na historické památky. Navrhnout etapizaci s přihlédnutím ke stávající dopravní infrastruktuře a plánovaným projektům jakými je například proměna okolí Masarykova nádraží.

Pojďme se na tři finálové studie podívat. 

**TEAM 24 – Unit Architekti / A69** se snaží zachovat blokovou zástavbu, kterou můžeme vidět v okolních ulicích Karlína. Důraz je kladen na využití potenciálu území Těšnova, který by měl tvořit důležitý odpočinkový prostor s parkovými úpravami. Tato studie nabízí variantu se zachováním magistrály ve své současné ose nad povrchem, ale také možnost zahloubení. Autobusový terminál by byl integrován do suterénu a přízemí smíšeného objektu s kancelářskými prostory. 

**TEAM 50 – AGPS Architecture, Atelier Girot, IBV Hüsler** se snaží vytvořit parkový prostor v místě Těšnova se zachováním magistrály, která by byla zúžena. Pod magistrálou by mohlo vzniknout Archeologické muzeum a okolí doplněno o vodní plochy. Autobusové nádraží by podle tohoto návrhu mělo být součástí nové budovy s přímým napojením na metro.

**TEAM 55 – De Architekten Cie, M2AU, Lola Landscape Architects** nabízí velmi kvalitní a líbivou architekturu, množství vodních prvků, zelených ploch a vedení magistrály pod zemí. Dominantu pak tvoří budova Muzea Hlavního města Prahy, před kterou je navrhnuto náměstí s jezírky a parkovou úpravou. 

>U návrhů Teamu 24 a 50 vidím navrhovaný stav kolidující s ochranným pásmem dráhy, kdy vlaky směřujícím na Negrelliho viadukt mají jezdit skrz dům. To může způsobovat nejen vibrace, ale je pravděpodobné, že to nebude splňovat hlukové limity dané hygienickými předpisy. S vlaky uprostřed domů mají zkušenosti v Číně, u nás se zatím s ničím takovým nesetkáváme. Pro budoucí vývoj bude důležitá spolupráce několika hlavních vlastníků pozemků v okolí. Pozemky mají ve vlastnictví dva investoři. Jedním je ČSAD Praha holding, který má autobusové nádraží. Druhým je Masaryk Station Development, kde je Penta Real Estate a České dráhy.

Do soutěže se přihlásilo 57 týmů z celého světa - třeba i z Japonska nebo Číny. Do finále se nakonec probojovali český, nizozemský a švýcarský tým. **Pokud se chcete se všemi třemi studiemi seznámit detailněji, můžete navštívit až do 5. prosince prezentaci v CAMP.**

Víc si můžete přečíst třeba na webu [campuj.online](https://www.campuj.online/blog/nova-florenc-kdo-vybere-viteze).

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
