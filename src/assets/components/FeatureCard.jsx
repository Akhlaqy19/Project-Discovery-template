import React from 'react'

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


function FeatureCard() {
  return (
    <div className=''>
      FeatureCard
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aperiam ab assumenda eius, ea enim veniam consectetur unde? Corrupti eius possimus officiis, cum quae odit deleniti suscipit voluptatibus earum magni itaque sapiente cumque et saepe repellendus dicta quibusdam est. Repellendus, id deleniti tenetur at velit iure repellat non nisi officiis modi corrupti harum dolores soluta eligendi ratione sequi repudiandae, sapiente laborum delectus eum atque libero. Saepe, aliquam? Qui aliquid impedit provident iste, eos cumque accusantium id, aperiam reprehenderit ex incidunt, est rerum quisquam consequuntur ratione repudiandae consectetur mollitia tempore. Incidunt, tenetur. Earum exercitationem neque ratione. Atque sint, vitae sequi fuga assumenda culpa saepe, reprehenderit aliquam soluta molestiae cumque nihil aliquid nulla beatae ea et molestias voluptate itaque pariatur obcaecati libero quam aut est. Vero, fuga nemo temporibus consequuntur, corporis, exercitationem expedita magnam ipsam enim aperiam quod labore reiciendis quibusdam atque hic deleniti earum commodi? Dolorum ea deserunt, voluptas laudantium quas dolorem debitis libero molestiae repudiandae. Asperiores placeat a vel atque autem consequatur totam sunt exercitationem, itaque magnam illo temporibus ducimus veritatis debitis reprehenderit dolorem ipsam dicta impedit numquam? Praesentium corrupti, quam harum sint odit dolores veritatis accusamus illo aliquid nam expedita eaque explicabo culpa quia sequi alias sed a quisquam iusto sit. Assumenda suscipit placeat error quae eveniet animi hic corrupti minus, sed aperiam eaque ipsa sunt! Exercitationem voluptatibus eligendi tempore voluptatum ad molestias quo quod, mollitia repudiandae recusandae at distinctio perferendis similique magnam explicabo maiores fuga sint atque labore tenetur deleniti velit delectus. Magni earum enim atque omnis quam ab dolores quae necessitatibus autem. Voluptatum eum modi quaerat illum architecto excepturi animi pariatur ut obcaecati! Odio quisquam iure sequi sit consectetur quod pariatur, officia in maxime similique voluptas. Aspernatur fugit hic magnam itaque quis, distinctio odit autem. Fugiat recusandae ipsa id reiciendis, exercitationem asperiores molestias corrupti, veniam dicta deleniti maiores ad distinctio maxime aliquid possimus inventore officiis consequuntur labore dignissimos, rem ab. Accusantium dolorem qui est voluptas? Soluta perspiciatis nobis voluptates voluptatem repellat quae repellendus alias error quo, eum veniam recusandae amet maxime! Eius fuga hic deleniti nulla molestiae vitae assumenda sit ipsa alias, nemo, asperiores nostrum quaerat facere ad nesciunt atque omnis accusantium dolorum suscipit? Pariatur illum ipsa quia fugiat aut? Quam porro provident doloribus soluta nesciunt animi fugiat ipsum dicta iure eum vel, numquam dolor. Nam error quas dicta aliquid deserunt excepturi hic magni, perspiciatis corrupti quidem voluptatibus quasi ullam dignissimos repudiandae quam autem atque sed omnis voluptatem, deleniti placeat. Culpa alias fugiat sed iusto laudantium expedita nihil sint, accusantium incidunt adipisci, rerum quae mollitia non magni veritatis. Officia maxime consequatur amet excepturi, nesciunt voluptatem unde distinctio perspiciatis dolorem optio at! Blanditiis expedita optio temporibus minima nesciunt ducimus aliquam? Debitis iure reiciendis fugiat ab. Suscipit aperiam possimus itaque, optio accusantium doloremque ipsa tenetur reiciendis, facilis eos eligendi ullam voluptas nihil quibusdam labore, expedita deserunt. Vel vero ratione libero. Quam iure omnis earum laboriosam, dolore esse aperiam id ad nemo culpa et ipsa quis nam rem voluptatum iusto hic voluptas deleniti tempora. Corrupti adipisci ut quo hic modi minus asperiores eaque expedita odio necessitatibus, explicabo quos eos temporibus quis libero laudantium officiis, doloremque mollitia provident. Magnam repudiandae laboriosam ea, aliquam architecto suscipit deserunt nihil dolor rem quod exercitationem unde soluta, rerum inventore. Qui quaerat et quas consectetur inventore nulla, minus ut ducimus, exercitationem voluptatem vel molestias, accusamus in laboriosam. Minima exercitationem facere consequatur libero neque totam, cupiditate quibusdam placeat molestiae, veniam, numquam necessitatibus! Ab nihil eos molestias, earum delectus, architecto beatae harum nesciunt dolorum distinctio laborum. Cupiditate molestias et illum placeat exercitationem mollitia possimus tempora odio ex natus. Corporis, exercitationem ex illo animi excepturi, voluptates inventore officiis ducimus ipsum minima nesciunt quidem modi eligendi cupiditate, corrupti dolores ratione illum cumque. Nemo, ipsa tenetur asperiores sequi impedit soluta sint voluptate ea, nam veritatis ratione veniam neque quod numquam molestias? Non illo, aut accusamus dolore ea, dignissimos hic ducimus dicta nulla tenetur sunt ipsa. Minus, dolores! Corporis excepturi numquam laborum ullam amet voluptates optio consectetur iure enim. Dolorem repudiandae quia blanditiis totam neque rem delectus molestiae voluptatum officia, exercitationem id ullam corporis tempore aliquid a esse molestias nobis possimus sapiente inventore cum ipsam facere? Quod, repudiandae nostrum voluptatem asperiores optio sit laudantium provident pariatur perspiciatis rerum doloribus aperiam facere hic ipsa culpa, tenetur tempore earum totam suscipit qui nam. Neque quos voluptatum unde dignissimos laudantium harum fugit ab quo modi, illum dolore, culpa nemo itaque ducimus ut laboriosam iusto officiis, cupiditate maxime nam adipisci eligendi nulla facilis! Ut, aperiam doloribus aspernatur cumque earum omnis repellendus minima provident voluptate placeat amet est similique at magnam asperiores facilis illo vitae aliquid quae distinctio! Et, sed odio natus saepe quo vitae voluptates impedit debitis quia provident necessitatibus, commodi adipisci, autem deserunt! Aut voluptates ex sapiente vel dicta quo est quidem iste, consequatur ea praesentium eos sit, excepturi dolor! Quam dolorum maxime voluptas nostrum quae officiis soluta similique expedita vero, illo repudiandae. Vitae, aspernatur! Sequi, est itaque? Aspernatur recusandae corrupti vero doloremque fugiat, eos similique amet rem tenetur temporibus laudantium molestiae cum cumque nemo nisi ullam eum optio ut ex eveniet dicta enim esse ipsam. Voluptates exercitationem fugiat eos enim perferendis ducimus, error unde voluptatum corporis, libero architecto earum? Dolore, doloribus provident necessitatibus recusandae libero saepe pariatur quo enim tempora, quas, illum hic odit veritatis error nesciunt commodi eius? Voluptatem nisi est fugiat alias eaque. Numquam veritatis, dolor possimus, obcaecati ab magni repellat eveniet nobis ea, officiis illum id incidunt? Fugiat neque minima exercitationem, eveniet aperiam nam ut. Quia possimus temporibus quisquam vero provident accusamus ipsam ullam iste obcaecati at praesentium, corporis quo ipsa incidunt facilis, aut dolorem. Ex quo sint nihil distinctio? Odit officiis praesentium, quia molestiae ut sint doloribus expedita consequatur omnis possimus odio, sit numquam aspernatur quibusdam, aliquid eveniet repellat debitis accusamus voluptatem consequuntur eius aut? Natus qui, neque amet provident quas tempore molestias iusto odio et rem veritatis, earum ipsum blanditiis! Odio ab sequi vitae. Cumque dicta tempora voluptas similique maiores id accusamus rerum rem unde doloremque aliquid esse harum possimus ullam fugit, magnam mollitia, excepturi placeat perferendis consectetur. Illo.

      {/* <!-- Slider main container --> */}
      <div className="swiper w-150 h-75">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    
    </div>
  )
}

export default FeatureCard