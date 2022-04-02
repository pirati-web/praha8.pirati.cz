---
title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko
authorId: martin.sterba
image: posts/2022-04-02-uklidmecesko/uklidmecesko4.jpeg
tags: [Piráti, Ukliďme Česko, Životní prostředí]
fancybox:
  - name: Ukliďme Česko v Praze 8
    img:
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko1.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko2.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko3.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko4.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko } 
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko5.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko6.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko } 
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko7.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko8.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }      
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko9.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
      - { src: posts/2022-04-02-uklidmecesko/uklidmecesko10.jpeg, title: Odpad z přírody sám nezmizí. Vyrazili jsme uklízet Česko }
---

**My čekali jaro, a zatím přišel mráz.  I tak by se dala nazvat první dubnová sobota, kdy se konala tradiční celostátní akce Ukliďme Česko. A zúčastnili jsme se jí i my – Jan Kolátor vyrazil do Ďáblického háje a Martin Štěrba se studentským spolkem Koridor do okolí kolejí 17. listopadu v Holešovičkách. Do Holešoviček dorazil také Zdeněk Hřib - primátor Prahy.** 

Obě místa prokoukla a díky zaslouží všichni, kteří se do úklidu zapojili. Kam jste vyrazili vy?

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
<br />
