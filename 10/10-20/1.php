<?php get_header();?>
<!--zw_07-19-->
<?php $zw_path = './wp-content/themes/7tin/zw_statics'; ?>
<link rel="stylesheet" href="<?php echo $zw_path; ?>/css/swiper.min.css">
<link type="text/css" href="<?php echo $zw_path; ?>/css/index.css?ver=10121" rel="Stylesheet"/>
<link type="text/css" href="<?php echo $zw_path; ?>/css/media.css" rel="Stylesheet"/>
<!--zw_07-19-->
<div class="qr_left" id="qr_left_hidden">
    <img src="<?php echo $zw_path; ?>/images/qr_left.png">
    <a href="javascript:;" id="qr_left"></a>
</div>


<div class="content-wrap clearfix">



<!------1008 xfa  start --------->


    <div class="zw_banner">
        <div class="banner_left">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                            <!--主页轮播图start -->
							<?php  echo do_shortcode("[huge_it_slider id='6']"); ?>
                    </div>

                </div>
            </div>

        </div>
        <ul>
            <li>
                <a href="#">
                <img src="<?php echo $zw_path; ?>/images/banner_2.png">
                <span class="index_banner_text">评测 | 暴风一体机Matrix，2499元风一体机风一体机风一体机风一 ...</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="<?php echo $zw_path; ?>/images/banner_3.png">
                <span class="index_banner_text">2499元风一体机风一体机风一体机2499元风一体机风一体机风</span>
                </a>
            </li>
            <li class="brom">
                <a href="#">
                <img src="<?php echo $zw_path; ?>/images/banner_4.png">
                <span class="index_banner_text">2499元风一体机风一体机风一体机2499元风一体机风一体机风</span>
                </a>
            </li>
            <li class="brom">
                <a href="#">
                <img src="<?php echo $zw_path; ?>/images/banner_5.png">
                <span class="index_banner_text">2499元风一体机风一体机风一体机2499元风一体机风一体机风</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="clear"></div>



	
    <div class="index_content">
        <div class="index_content_tab">
            <ul>
                <li class="active">精选</li>
                <li>大公司</li>
                <li>应用案例</li>
                <li>游戏</li>
                <li>评测实验</li>
                <li>报告</li>
            </ul>
        </div>

        <div class="index_content_list">




	<!------1005 xfa start ----------------->

 

	<!------1006 xfa -end ------------------>



  
    </div>


<!------1008xfa    end  ---------->
  <div class="content banner">

	
    <div class="newslist xfa-newslist banner clearfix"  >
    <?php 
		// 瀑布流
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		if(is_user_logged_in()){
			global $current_user; 
			get_currentuserinfo();
			$uid = $current_user->ID;
			$tags = get_user_meta($uid,'tags',true);
			$mytags = explode(',',$tags);
			$counttags = count($mytags);
			if($counttags < 5){
				$args = array(
					'category__not_in'   => array(461),//排除VR头盔
					'caller_get_posts' => 1,
					'paged' => $paged,
					'ignore_sticky_posts' => 0 //取消文章置顶
				);
			}else{
				$tags = substr($tags,0,strlen($tags)-1);
				$tags = substr($tags,1,strlen($tags)-1);
				$args = array(
					'category__not_in'   => array(461),//排除VR头盔
					'caller_get_posts' => 1,
					'cat'  => $tags,  
					'paged' => $paged
				);
			}
		}else{
			$args = array(
				'category__not_in'   => array(461),//排除VR头盔
				'caller_get_posts' => 1,
				'paged' => $paged,
				'ignore_sticky_posts' => 0 //取消文章置顶
			);
		}
	
		 query_posts($args);
		
		 $i = 0;

		 $j = rand(3,5);	
		while ( have_posts() ) : the_post();
	{




        <script>
        
        $('.fa-search5').on('click',function(){
            $('.xfa-search2').show()
        })
        </script>
			if($paged==1&&$i==$j)
			{
				echo '<article class="excerpt  tingguanggao">
					<a target="_blank" href="http://www.7tin.cn/news/82018.html">
					<img src="http://www.7tin.cn/wp-content/themes/7tin/images/htcvive.jpg" alt="青亭VR" />
					</a>
					</article>';
			}
			$i++;

			get_template_part( 'content', get_post_format() );
		
		}endwhile; 

		wp_reset_query();
		?>

		

		<div class="pagenavi  tips"> <?php next_posts_link('查看更多') ?> <span>...</span></div>
    </div>

  </div>
</div>
<?php get_sidebar();?>
<?php get_footer_index();?>


