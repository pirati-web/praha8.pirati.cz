---
title: "Hrozí, že se kvůli existenci lanovky zpozdí výstavba tramvajové trati mezi Bohnicemi a Podbabou. To nechceme!"
author: Michal Novák
image: posts/lanovka-projednavani-mhmp.jpg
tags: [Bohnice, Doprava, Tramvaj Kobylisy-Bohnice-Podbaba, Lanovka Bohnice–Podbaba, Magistrát]
fancybox:
  - name: Takhle by lanovka z Bohnic do Podbaby měla vypadat
    img:
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final1.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final2.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final3.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final5.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final6.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
---

**Dnes jsme se byli podívat na veřejném projednání lanovky Podbaba-Bohnice na pražském magistrátu.**

>"S Piráty se budeme opakovat, když řekneme, že projekt lanovky má několik zásadních problémů," říká pirátský zastupitel Prahy 8 [Michal Novák](http://praha8.pirati.cz/lide/michal-novak.html).

Za prvé hrozí, že se kvůli existenci lanovky zpozdí výstavba tramvajové trati mezi Bohnicemi a Podbabou, která představuje opravdu dlouhodobé a systémové řešení spojení městských částí 6 a 8. Magistrát sice tvrdí, že se to nestane, ale zkušenosti z praxe napovídají, že pokud bude město muset volit mezi vícero investičními projekty a nějaké, byť málo-kapacitní, řešení dopravy Bohnice-Trója-Podbaba zde bude, dostanou v budoucnu přednost jiné tramvajové tratě.

Za druhé hrozí, že projekt lanovky přivede do Bohnic dodatečnou automobilovou dopravu ze Středočeského kraje. "Dojíždějící" pak budou chtít logicky v Bohnicích parkovat. To vyvolá buď nedostatek parkovacích míst nebo nutnost zavedení modrých zón - bez možnosti placení za dočasné stání.

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

