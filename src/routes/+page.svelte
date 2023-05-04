<script>
import About from "./about/+page.svelte";
  let title = 'Ninja Gaming Guides'

  const updateTitle = () => {
    title = "something else"
  }
</script>


<div class="index">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, rerum, sapiente accusantium porro sequi modi voluptas alias amet perferendis omnis. Culpa, obcaecati aliquid ipsa similique qui dignissimos itaque quos?</p>
  <a href="/guides">View Guides</a>
  <a href="/about">About</a>
</div>




<style>
  .index{
    text-align: center;
    display: block;
    margin: 20px auto;
  }

</style>