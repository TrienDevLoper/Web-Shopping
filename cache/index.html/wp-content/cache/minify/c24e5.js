(function($) {
    "use strict";
    var yoziWoo = {
        init: function() {
            var self = this;
            self.loginRegister();
            self.quickviewInit();
            self.wishlistInit();
            self.productDetail();
            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) { self.loadImages(); });
            setTimeout(function() { self.loadImages(); }, 300);
            $('body').on('hover', '.apus-topcart .cart_list', function() { $(this).perfectScrollbar(); });
            $('.widget_product_categories ul li.cat-item').each(function() {
                if ($(this).find('ul.children').length > 0) { $(this).prepend('<i class="closed fa fa-angle-down"></i>'); }
                $(this).find('ul.children').hide();
            });
            $("body").on("click", '.widget_product_categories ul li.cat-item .closed', function() {
                $(this).parent().find('ul.children').first().slideDown();
                $(this).removeClass('closed').removeClass('fa fa-angle-down').addClass('opened').addClass('fa fa-angle-up');
            });
            $("body").on("click", '.widget_product_categories ul li.cat-item .opened', function() {
                $(this).parent().find('ul.children').first().slideUp();
                $(this).removeClass('opened').removeClass('fa fa-angle-up').addClass('closed').addClass('fa fa-angle-down');
            });
            if (yozi_woo_options.enable_search == '1') { self.searchProduct(); }
            $('body').on('click', '.view-more-desc', function() {
                var $this = $(this);
                var $content = $this.parent().find("div.woocommerce-product-details__short-description");
                if ($this.hasClass('view-more')) {
                    var linkText = yozi_woo_options.view_less_text;
                    $content.removeClass("hideContent").addClass("showContent");
                    $this.removeClass("view-more").addClass("view-less");
                } else {
                    var linkText = yozi_woo_options.view_more_text;
                    $content.removeClass("showContent").addClass("hideContent");
                    $this.removeClass("view-less").addClass("view-more");
                };
                $this.find('span').text(linkText);
            });
            $('.widget_product_categories ul.product-categories').each(function(e) {
                var height = $(this).outerHeight();
                if (height > 260) {
                    var view_more = '<a href="javascript:void(0);" class="view-more-list-cat view-more"><span>' + yozi_woo_options.view_more_text + '</span> <i class="fa fa-angle-double-right"></i></a>';
                    $(this).parent().append(view_more);
                    $(this).addClass('hideContent');
                }
            });
            $('body').on('click', '.view-more-list-cat', function() {
                var $this = $(this);
                var $content = $this.parent().find(".product-categories");
                if ($this.hasClass('view-more')) {
                    var linkText = yozi_woo_options.view_less_text;
                    $content.removeClass("hideContent").addClass("showContent");
                    $this.removeClass("view-more").addClass("view-less");
                } else {
                    var linkText = yozi_woo_options.view_more_text;
                    $content.removeClass("showContent").addClass("hideContent");
                    $this.removeClass("view-less").addClass("view-more");
                };
                $this.find('span').text(linkText);
            });
            $('.woocommerce-widget-layered-nav-list').each(function(e) {
                var height = $(this).outerHeight();
                if (height > 260) {
                    var view_more = '<a href="javascript:void(0);" class="view-more-list view-more"><span>' + yozi_woo_options.view_more_text + '</span> <i class="fa fa-angle-double-right"></i></a>';
                    $(this).parent().append(view_more);
                    $(this).addClass('hideContent');
                }
            });
            $('body').on('click', '.view-more-list', function() {
                var $this = $(this);
                var $content = $this.parent().find(".woocommerce-widget-layered-nav-list");
                if ($this.hasClass('view-more')) {
                    var linkText = yozi_woo_options.view_less_text;
                    $content.removeClass("hideContent").addClass("showContent");
                    $this.removeClass("view-more").addClass("view-less");
                } else {
                    var linkText = yozi_woo_options.view_more_text;
                    $content.removeClass("showContent").addClass("hideContent");
                    $this.removeClass("view-less").addClass("view-more");
                };
                $this.find('span').text(linkText);
            });
            if ($('.details-product.layout-v3 .sticky-this').length > 0) { if ($(window).width() > 991) { $('.details-product.layout-v3 .sticky-this').stick_in_parent({ parent: ".product-v-wrapper", spacer: false }); } }
            self.initDokan();
        },
        wishlistInit: function() {
            $('body').on('added_to_wishlist', function(event, variation) {
                $('.wishlist-icon .count').each(function() {
                    var count = $(this).text();
                    count = parseInt(count) + 1;
                    $(this).text(count);
                });
            });
            $('body').on('removed_from_wishlist', function(event, variation) {
                if ($('.wishlist-icon .count').length > 0) {
                    $('.wishlist-icon .count').each(function() {
                        var count = $(this).text();
                        count = parseInt(count) - 1;
                        $(this).text(count);
                    });
                }
            });
            $('body').on('woosw_change_count', function(event, variation) { if ($('.count.woosw-custom-menu-item').length > 0) { $('.count.woosw-custom-menu-item').each(function() { $(this).text(variation); }); } });
        },
        initDokan: function() {
            var form = $('.dokan-seller-search-form');
            var xhr;
            var timer = null;
            form.on('keyup', '#search', function() {
                var self = $(this),
                    data = { search_term: self.val(), pagination_base: form.find('#pagination_base').val(), per_row: '<?php echo esc_js($per_row); ?>', action: 'dokan_seller_listing_search', _wpnonce: form.find('#nonce').val() };
                if (timer) { clearTimeout(timer); }
                if (xhr) { xhr.abort(); }
                timer = setTimeout(function() {
                    form.find('.dokan-overlay').show();
                    xhr = $.post(dokan.ajaxurl, data, function(response) {
                        if (response.success) {
                            form.find('.dokan-overlay').hide();
                            var data = response.data;
                            $('#dokan-seller-listing-wrap').html($(data).find('.seller-listing-content'));
                        }
                    });
                }, 500);
            });
            $('body').on('click', ".wrapper-dokan .btn-showserach-dokan", function() { $(".wrapper-dokan .dokan-seller-search-form").toggleClass('active'); });
        },
        loginRegister: function() {
            $('body').on('click', '.register-login-action', function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                setCookie('yozi_login_register', href, 0.5);
                $('.register_login_wrapper').removeClass('active');
                $(href).addClass('active');
            });
            $(document).on('click', '.login-topbar .login', function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                setCookie('yozi_login_register', '#customer_login', 0.5);
                window.location.href = href;
            });
            $(document).on('click', '.login-topbar .register', function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                setCookie('yozi_login_register', '#customer_register', 0.5);
                window.location.href = href;
            });
        },
        searchProduct: function() {
            $('.apus-autocompleate-input').typeahead({ 'hint': true, 'highlight': true, }, {
                name: 'search',
                source: function(query, processSync, processAsync) {
                    processSync([yozi_woo_options.empty_msg]);
                    $('.twitter-typeahead').addClass('loading');
                    return $.ajax({ url: yozi_woo_options.ajaxurl, type: 'GET', data: { 's': query, 'category': $('.apus-search-form .dropdown_product_cat').val(), 'action': 'yozi_autocomplete_search', 'security': yozi_woo_options.ajax_nonce }, dataType: 'json', success: function(json) { $('.twitter-typeahead').removeClass('loading'); return processAsync(json); } });
                },
                templates: { empty: ['<div class="empty-message">', yozi_woo_options.empty_msg, '</div>'].join('\n'), suggestion: Handlebars.compile(yozi_woo_options.template) },
            });
            $('.apus-autocompleate-input').on('typeahead:selected', function(e, data) {
                e.preventDefault();
                setTimeout(function() { $('.apus-autocompleate-input').val(data.title); }, 5);
                return false;
            });
        },
        productDetail: function() { $('body').on('click', '.woocommerce-review-link', function() { $('html, body').animate({ scrollTop: $("#reviews").offset().top }, 1000); return false; }); },
        quickviewInit: function() {
            var $self = this;
            $('body').on('click', 'a.quickview', function(e) {
                e.preventDefault();
                var self = $(this);
                self.parent().parent().parent().addClass('loading');
                var product_id = $(this).data('product_id');
                var url = yozi_woo_options.ajaxurl + '?action=yozi_quickview_product&product_id=' + product_id + '&security=' + yozi_woo_options.ajax_nonce;
                $.get(url, function(data, status) {
                    $.magnificPopup.open({
                        mainClass: 'apus-mfp-zoom-in apus-quickview',
                        items: { src: data, type: 'inline' },
                        callbacks: {
                            open: function() {
                                if (typeof wc_add_to_cart_variation_params !== 'undefined') { $('.variations_form').each(function() { $(this).wc_variation_form().find('.variations select:eq(0)').change(); }); }
                                if ($.isFunction($.fn.tawcvs_variation_swatches_form)) { $('.variations_form').tawcvs_variation_swatches_form(); }
                                $self.init_slick($(".apus-woocommerce-product-gallery"));
                                self.parent().parent().parent().removeClass('loading');
                            }
                        }
                    });
                });
            });
        },
        init_slick: function(self) {
            self.each(function() {
                var config = { infinite: false, arrows: $(this).data('nav'), dots: $(this).data('pagination'), lazyLoad: 'onDemand', slidesToShow: 4, slidesToScroll: 4, prevArrow: "<button type='button' class='slick-arrow slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></span><span class='textnav'>" + yozi_ajax.previous + "</span></button>", nextArrow: "<button type='button' class='slick-arrow slick-next pull-right'><span class='textnav'>" + yozi_ajax.next + "</span><i class='fa fa-angle-right' aria-hidden='true'></i></button>", };
                var slick = $(this);
                if ($(this).data('items')) {
                    config.slidesToShow = $(this).data('items');
                    config.slidesToScroll = $(this).data('items');
                }
                if ($(this).data('infinite')) { config.infinite = true; }
                if ($(this).data('rows')) { config.rows = $(this).data('rows'); }
                if ($(this).data('asnavfor')) { config.asNavFor = $(this).data('asnavfor'); }
                if ($(this).data('slidestoscroll')) { config.slidesToScroll = $(this).data('slidestoscroll'); }
                if ($(this).data('focusonselect')) { config.focusOnSelect = $(this).data('focusonselect'); }
                if ($(this).data('large')) { var desktop = $(this).data('large'); } else { var desktop = config.items; }
                if ($(this).data('smalldesktop')) { var smalldesktop = $(this).data('smalldesktop'); } else { if ($(this).data('large')) { var smalldesktop = $(this).data('large'); } else { var smalldesktop = config.items; } }
                if ($(this).data('medium')) { var medium = $(this).data('medium'); } else { var medium = config.items; }
                if ($(this).data('smallmedium')) { var smallmedium = $(this).data('smallmedium'); } else { var smallmedium = 2; }
                if ($(this).data('extrasmall')) { var extrasmall = $(this).data('extrasmall'); } else { var extrasmall = 1; }
                if ($(this).data('smallest')) { var smallest = $(this).data('smallest'); } else { var smallest = 1; }
                config.responsive = [{ breakpoint: 321, settings: { slidesToShow: smallest, slidesToScroll: smallest, } }, { breakpoint: 481, settings: { slidesToShow: extrasmall, slidesToScroll: extrasmall, } }, { breakpoint: 769, settings: { slidesToShow: smallmedium, slidesToScroll: smallmedium } }, { breakpoint: 981, settings: { slidesToShow: medium, slidesToScroll: medium } }, { breakpoint: 1200, settings: { slidesToShow: smalldesktop, slidesToScroll: smalldesktop } }, { breakpoint: 1501, settings: { slidesToShow: desktop, slidesToScroll: desktop } }];
                if ($('html').attr('dir') == 'rtl') { config.rtl = true; }
                $(this).slick(config);
            });
        },
        loadImages: function() {
            var self = this;
            $(window).off('scroll.unveil resize.unveil lookup.unveil');
            var $images = $('body').find('.product-image:not(.image-loaded) .unveil-image');
            if ($images.length) {
                $images.unveil(1, function() {
                    $(this).load(function() {
                        $(this).parents('.product-image').first().addClass('image-loaded');
                        $(this).removeAttr('data-src');
                        $(this).removeAttr('data-srcset');
                        $(this).removeAttr('data-sizes');
                    });
                });
            }
        }
    };
    yoziWoo.init();
    var yoziAccessories = {
        init: function() {
            var self = this;
            $('body').on('click', '.accessoriesproducts .accessory-add-product', function() { self.change_event(); });
            self.check_all_items();
            self.add_to_cart();
        },
        add_to_cart: function() {
            var self = this;
            $('body').on('click', '.add-all-items-to-cart:not(.loading)', function(e) {
                e.preventDefault();
                var self_this = $(this);
                self_this.addClass('loading');
                var all_product_ids = self.get_checked_product_ids();
                if (all_product_ids.length === 0) { var msg = yozi_woo_options.empty; } else {
                    for (var i = 0; i < all_product_ids.length; i++) { $.ajax({ type: "POST", async: false, url: yozi_ajax.ajaxurl, data: { 'product_id': all_product_ids[i], 'action': 'woocommerce_add_to_cart', 'security': yozi_woo_options.ajax_nonce }, success: function(response) { self.refresh_fragments(response); } }); }
                    var msg = yozi_woo_options.success;
                }
                $('.yozi-wc-message').html(msg);
                self_this.removeClass('loading');
            });
        },
        change_event: function() {
            var self = this;
            $('.accessoriesproducts-wrapper').addClass('loading');
            var total_price = self.get_total_price();
            $.ajax({
                type: "POST",
                async: false,
                url: yozi_ajax.ajaxurl,
                data: { 'action': "yozi_get_total_price", 'data': total_price, 'security': yozi_woo_options.ajax_nonce },
                success: function(response) {
                    $('span.total-price .amount').html(response);
                    $('span.product-count').html(self.product_count());
                    var product_ids = self.get_unchecked_product_ids();
                    $('.accessoriesproducts .list-v2').each(function() { $(this).parent().removeClass('is-disable'); for (var i = 0; i < product_ids.length; i++) { if ($(this).hasClass('list-v2-' + product_ids[i])) { $(this).parent().addClass('is-disable'); } } });
                }
            });
            $('.accessoriesproducts-wrapper').removeClass('loading');
        },
        check_all_items: function() {
            var self = this;
            $('body').on('click', '.check-all-items', function() {
                $('.accessory-add-product:checkbox').not(this).prop('checked', this.checked);
                if ($(this).is(":checked")) { $('.accessory-add-product:checkbox').prop('checked', true); } else { $('.accessory-add-product:checkbox').prop("checked", false); }
                self.change_event();
            });
        },
        product_count: function() {
            var pcount = 0;
            $('.accessoriesproducts .accessory-add-product').each(function() { if ($(this).is(':checked')) { pcount++; } });
            return pcount;
        },
        get_total_price: function() {
            var tprice = 0;
            $('.accessoriesproducts .accessory-add-product').each(function() { if ($(this).is(':checked')) { tprice += parseFloat($(this).data('price')); } });
            return tprice;
        },
        get_checked_product_ids: function() {
            var pids = [];
            $('.accessoriesproducts .accessory-add-product').each(function() { if ($(this).is(':checked')) { pids.push($(this).data('id')); } });
            return pids;
        },
        get_unchecked_product_ids: function() {
            var pids = [];
            $('.accessoriesproducts .accessory-add-product').each(function() { if (!$(this).is(':checked')) { pids.push($(this).data('id')); } });
            return pids;
        },
        refresh_fragments: function(response) {
            var frags = response.fragments;
            if (frags) { $.each(frags, function(key) { $(key).addClass('updating'); }); }
            if (frags) { $.each(frags, function(key, value) { $(key).replaceWith(value); }); }
        }
    }
    yoziAccessories.init();
    var ApusProductGallery = function($target, args) {
        this.$target = $target;
        this.$images = $('.woocommerce-product-gallery__image', $target);
        if (0 === this.$images.length) { this.$target.css('opacity', 1); return; }
        $target.data('product_gallery', this);
        this.flexslider_enabled = $.isFunction($.fn.flexslider) && wc_single_product_params.flexslider_enabled;
        this.zoom_enabled = $.isFunction($.fn.zoom) && wc_single_product_params.zoom_enabled;
        this.photoswipe_enabled = typeof PhotoSwipe !== 'undefined' && wc_single_product_params.photoswipe_enabled;
        if (args) {
            this.flexslider_enabled = false === args.flexslider_enabled ? false : this.flexslider_enabled;
            this.zoom_enabled = false === args.zoom_enabled ? false : this.zoom_enabled;
            this.photoswipe_enabled = false === args.photoswipe_enabled ? false : this.photoswipe_enabled;
        }
        if (1 === this.$images.length) { this.flexslider_enabled = false; }
        this.initFlexslider = this.initFlexslider.bind(this);
        this.initZoom = this.initZoom.bind(this);
        this.initZoomForTarget = this.initZoomForTarget.bind(this);
        this.initPhotoswipe = this.initPhotoswipe.bind(this);
        this.getGalleryItems = this.getGalleryItems.bind(this);
        this.openPhotoswipe = this.openPhotoswipe.bind(this);
        if (this.flexslider_enabled) { this.initFlexslider(); } else { this.$target.css('opacity', 1); }
        if (this.zoom_enabled) {
            this.initZoom();
            $target.on('woocommerce_gallery_init_zoom', this.initZoom);
        }
        if (this.photoswipe_enabled) { this.initPhotoswipe(); }
    };
    ApusProductGallery.prototype.initFlexslider = function() {
        var $target = this.$target,
            gallery = this;
        var slick_init = function(self) {
            self.each(function() {
                var config = { infinite: false, arrows: $(this).data('nav'), dots: $(this).data('pagination'), slidesToShow: 4, slidesToScroll: 4, prevArrow: "<button type='button' class='slick-arrow slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>", nextArrow: "<button type='button' class='slick-arrow slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", };
                if ($(this).data('items')) {
                    config.slidesToShow = $(this).data('items');
                    config.slidesToScroll = $(this).data('items');
                }
                if ($(this).data('infinite')) { config.infinite = true; }
                if ($(this).data('rows')) { config.rows = $(this).data('rows'); }
                if ($(this).data('vertical')) { config.vertical = true; }
                if ($(this).data('asnavfor')) { config.asNavFor = $(this).data('asnavfor'); }
                if ($(this).data('slidestoscroll')) { config.slidesToScroll = $(this).data('slidestoscroll'); }
                if ($(this).data('focusonselect')) { config.focusOnSelect = $(this).data('focusonselect'); }
                if ($(this).data('large')) { var desktop = $(this).data('large'); } else { var desktop = config.items; }
                if ($(this).data('medium')) { var medium = $(this).data('medium'); } else { var medium = config.items; }
                if ($(this).data('smallmedium')) { var smallmedium = $(this).data('smallmedium'); } else { var smallmedium = 2; }
                if ($(this).data('extrasmall')) { var extrasmall = $(this).data('extrasmall'); } else { var extrasmall = 1; }
                config.responsive = [{ breakpoint: 321, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }, { breakpoint: 480, settings: { slidesToShow: extrasmall, slidesToScroll: extrasmall, dots: false } }, { breakpoint: 769, settings: { slidesToShow: smallmedium, slidesToScroll: smallmedium } }, { breakpoint: 981, settings: { slidesToShow: medium, slidesToScroll: medium } }, { breakpoint: 1501, settings: { slidesToShow: desktop, slidesToScroll: desktop } }];
                if ($('html').attr('dir') == 'rtl') { config.rtl = true; }
                if ($(this).data('slickparent')) {
                    config.onAfterChange = afterChange;
                    $(this).on('afterChange', function(event, slick, currentSlide, nextSlide) {
                        var currentElement = $(slick.$slides.get(currentSlide));
                        gallery.initZoomForTarget(currentElement);
                    });
                }
                $(this).slick(config);
            });
        }
        var afterChange = function(slider, i) {
            var slideHeight = $(slider.$slides[i]).height();
            alert($(slider.$slides[i]).attr('class'));
        };
        slick_init($("[data-carousel=slick-gallery]"));
    };
    ApusProductGallery.prototype.initZoom = function() { if ($('.details-product.layout-v3').length > 0) { this.initZoomForTarget(this.$images); } else { this.initZoomForTarget(this.$images.first()); } };
    ApusProductGallery.prototype.initZoomForTarget = function(zoomTarget) {
        if (!this.zoom_enabled) { return false; }
        var galleryWidth = this.$target.width(),
            zoomEnabled = false;
        $(zoomTarget).each(function(index, target) { var image = $(target).find('img'); if (image.data('large_image_width') > galleryWidth) { zoomEnabled = true; return false; } });
        if (zoomEnabled) {
            var zoom_options = { touch: false };
            if ('ontouchstart' in window) { zoom_options.on = 'click'; }
            zoomTarget.trigger('zoom.destroy');
            zoomTarget.zoom(zoom_options);
        }
    };
    ApusProductGallery.prototype.initPhotoswipe = function() {
        if (this.zoom_enabled && this.$images.length > 0) {
            this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger"><i class="fa fa-search-plus" aria-hidden="true"></i></a>');
            this.$target.on('click', '.woocommerce-product-gallery__trigger', this.openPhotoswipe);
        }
        this.$target.on('click', '.woocommerce-product-gallery__image a', this.openPhotoswipe);
    };
    ApusProductGallery.prototype.getGalleryItems = function() {
        var $slides = this.$images,
            items = [];
        if ($slides.length > 0) {
            $slides.each(function(i, el) {
                var img = $(el).find('img'),
                    large_image_src = img.attr('data-large_image'),
                    large_image_w = img.attr('data-large_image_width'),
                    large_image_h = img.attr('data-large_image_height'),
                    item = { src: large_image_src, w: large_image_w, h: large_image_h, title: img.attr('data-caption') ? img.attr('data-caption') : img.attr('title') };
                items.push(item);
            });
        }
        return items;
    };
    ApusProductGallery.prototype.openPhotoswipe = function(e) {
        e.preventDefault();
        var pswpElement = $('.pswp')[0],
            items = this.getGalleryItems(),
            eventTarget = $(e.target),
            clicked;
        if (eventTarget.is('.woocommerce-product-gallery__trigger') || eventTarget.is('.woocommerce-product-gallery__trigger img')) { clicked = this.$target.find('.flex-active-slide'); } else { clicked = eventTarget.closest('.woocommerce-product-gallery__image'); }
        var options = $.extend({ index: $(clicked).index() }, wc_single_product_params.photoswipe_options);
        var photoswipe = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        photoswipe.init();
    };
    $.fn.apus_wc_product_gallery = function(args) { new ApusProductGallery(this, args); return this; };
    $('.apus-woocommerce-product-gallery-wrapper').each(function() { $(this).apus_wc_product_gallery(); });
    $('body').on('found_variation', function(event, variation) { wc_variations_image_update(variation); });
    $('body').on('reset_image', function(event, variation) { wc_variations_image_update(variation); });
    var wc_variations_image_update = function(variation) {
        var $form = $('.variations_form'),
            $product = $form.closest('.product'),
            $product_gallery = $product.find('.apus-woocommerce-product-gallery-wrapper'),
            $gallery_img = $product.find('.apus-woocommerce-product-gallery-thumbs img:eq(0)'),
            $product_img_wrap = $product_gallery.find('.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder').eq(0),
            $product_img = $product_img_wrap.find('.wp-post-image'),
            $product_link = $product_img_wrap.find('a').eq(0);
        if (variation && variation.image && variation.image.src && variation.image.src.length > 1) {
            if ($('.apus-woocommerce-product-gallery-thumbs img[src="' + variation.image.thumb_src + '"]').length > 0) {
                $('.apus-woocommerce-product-gallery-thumbs img[src="' + variation.image.thumb_src + '"]').trigger('click');
                $form.attr('current-image', variation.image_id);
                return;
            } else {
                $product_img.wc_set_variation_attr('src', variation.image.src);
                $product_img.wc_set_variation_attr('height', variation.image.src_h);
                $product_img.wc_set_variation_attr('width', variation.image.src_w);
                $product_img.wc_set_variation_attr('srcset', variation.image.srcset);
                $product_img.wc_set_variation_attr('sizes', variation.image.sizes);
                $product_img.wc_set_variation_attr('title', variation.image.title);
                $product_img.wc_set_variation_attr('alt', variation.image.alt);
                $product_img.wc_set_variation_attr('data-src', variation.image.full_src);
                $product_img.wc_set_variation_attr('data-large_image', variation.image.full_src);
                $product_img.wc_set_variation_attr('data-large_image_width', variation.image.full_src_w);
                $product_img.wc_set_variation_attr('data-large_image_height', variation.image.full_src_h);
                $product_img_wrap.wc_set_variation_attr('data-thumb', variation.image.src);
                $gallery_img.wc_set_variation_attr('src', variation.image.thumb_src);
                $gallery_img.wc_set_variation_attr('srcset', variation.image.thumb_srcset);
                $product_link.wc_set_variation_attr('href', variation.image.full_src);
                $gallery_img.removeAttr('srcset');
                if ($('.apus-woocommerce-product-gallery').data('slickparent') && $('.apus-woocommerce-product-gallery').find('.woocommerce-product-gallery__image').length > 1) { $('.apus-woocommerce-product-gallery').slick('slickGoTo', 0); }
            }
        } else {
            $product_img.wc_reset_variation_attr('src');
            $product_img.wc_reset_variation_attr('width');
            $product_img.wc_reset_variation_attr('height');
            $product_img.wc_reset_variation_attr('srcset');
            $product_img.wc_reset_variation_attr('sizes');
            $product_img.wc_reset_variation_attr('title');
            $product_img.wc_reset_variation_attr('alt');
            $product_img.wc_reset_variation_attr('data-src');
            $product_img.wc_reset_variation_attr('data-large_image');
            $product_img.wc_reset_variation_attr('data-large_image_width');
            $product_img.wc_reset_variation_attr('data-large_image_height');
            $product_img_wrap.wc_reset_variation_attr('data-thumb');
            $gallery_img.wc_reset_variation_attr('src');
            $product_link.wc_reset_variation_attr('href');
        }
        window.setTimeout(function() {
            $(window).trigger('resize');
            $form.wc_maybe_trigger_slide_position_reset(variation);
            $product_gallery.trigger('woocommerce_gallery_init_zoom');
        }, 20);
    };
})(jQuery)

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1); if (c.indexOf(name) == 0) return c.substring(name.length, c.length); }
    return "";
}; /*! This file is auto-generated */
! function(n, r) { var t, e; "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : (n = "undefined" != typeof globalThis ? globalThis : n || self, t = n._, (e = n._ = r()).noConflict = function() { return n._ = t, e }) }(this, function() {
    var n = "1.13.3",
        r = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {},
        e = Array.prototype,
        F = Object.prototype,
        V = "undefined" != typeof Symbol ? Symbol.prototype : null,
        P = e.push,
        a = e.slice,
        s = F.toString,
        q = F.hasOwnProperty,
        t = "undefined" != typeof ArrayBuffer,
        u = "undefined" != typeof DataView,
        U = Array.isArray,
        W = Object.keys,
        z = Object.create,
        L = t && ArrayBuffer.isView,
        $ = isNaN,
        C = isFinite,
        K = !{ toString: null }.propertyIsEnumerable("toString"),
        J = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        G = Math.pow(2, 53) - 1;

    function l(u, i) {
        return i = null == i ? u.length - 1 : +i,
            function() {
                for (var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0; t < n; t++) r[t] = arguments[t + i];
                switch (i) {
                    case 0:
                        return u.call(this, r);
                    case 1:
                        return u.call(this, arguments[0], r);
                    case 2:
                        return u.call(this, arguments[0], arguments[1], r)
                }
                for (var e = Array(i + 1), t = 0; t < i; t++) e[t] = arguments[t];
                return e[i] = r, u.apply(this, e)
            }
    }

    function i(n) { var r = typeof n; return "function" == r || "object" == r && !!n }

    function H(n) { return void 0 === n }

    function Q(n) { return !0 === n || !1 === n || "[object Boolean]" === s.call(n) }

    function o(n) { var r = "[object " + n + "]"; return function(n) { return s.call(n) === r } }
    var X = o("String"),
        Y = o("Number"),
        Z = o("Date"),
        nn = o("RegExp"),
        rn = o("Error"),
        tn = o("Symbol"),
        en = o("ArrayBuffer"),
        f = o("Function"),
        r = r.document && r.document.childNodes,
        p = f = "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof r ? function(n) { return "function" == typeof n || !1 } : f,
        r = o("Object"),
        un = u && r(new DataView(new ArrayBuffer(8))),
        f = "undefined" != typeof Map && r(new Map),
        u = o("DataView");
    var h = un ? function(n) { return null != n && p(n.getInt8) && en(n.buffer) } : u,
        v = U || o("Array");

    function y(n, r) { return null != n && q.call(n, r) }
    var on = o("Arguments"),
        fn = (! function() { on(arguments) || (on = function(n) { return y(n, "callee") }) }(), on);

    function an(n) { return Y(n) && $(n) }

    function cn(n) { return function() { return n } }

    function ln(r) { return function(n) { n = r(n); return "number" == typeof n && 0 <= n && n <= G } }

    function sn(r) { return function(n) { return null == n ? void 0 : n[r] } }
    var d = sn("byteLength"),
        pn = ln(d),
        hn = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    var vn = t ? function(n) { return L ? L(n) && !h(n) : pn(n) && hn.test(s.call(n)) } : cn(!1),
        g = sn("length");

    function yn(n, r) {
        r = function(r) { for (var t = {}, n = r.length, e = 0; e < n; ++e) t[r[e]] = !0; return { contains: function(n) { return !0 === t[n] }, push: function(n) { return t[n] = !0, r.push(n) } } }(r);
        var t = J.length,
            e = n.constructor,
            u = p(e) && e.prototype || F,
            i = "constructor";
        for (y(n, i) && !r.contains(i) && r.push(i); t--;)(i = J[t]) in n && n[i] !== u[i] && !r.contains(i) && r.push(i)
    }

    function b(n) { if (!i(n)) return []; if (W) return W(n); var r, t = []; for (r in n) y(n, r) && t.push(r); return K && yn(n, t), t }

    function dn(n, r) {
        var t = b(r),
            e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) { var o = t[i]; if (r[o] !== u[o] || !(o in u)) return !1 }
        return !0
    }

    function m(n) { return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n) }

    function gn(n) { return new Uint8Array(n.buffer || n, n.byteOffset || 0, d(n)) }
    m.VERSION = n, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value = function() { return this._wrapped }, m.prototype.toString = function() { return String(this._wrapped) };
    var bn = "[object DataView]";

    function mn(n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return !1;
        if (n != n) return r != r;
        var u = typeof n;
        return ("function" == u || "object" == u || "object" == typeof r) && function n(r, t, e, u) {
            r instanceof m && (r = r._wrapped);
            t instanceof m && (t = t._wrapped);
            var i = s.call(r);
            if (i !== s.call(t)) return !1;
            if (un && "[object Object]" == i && h(r)) {
                if (!h(t)) return !1;
                i = bn
            }
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + r == "" + t;
                case "[object Number]":
                    return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +r == +t;
                case "[object Symbol]":
                    return V.valueOf.call(r) === V.valueOf.call(t);
                case "[object ArrayBuffer]":
                case bn:
                    return n(gn(r), gn(t), e, u)
            }
            i = "[object Array]" === i;
            if (!i && vn(r)) {
                var o = d(r);
                if (o !== d(t)) return !1;
                if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0;
                i = !0
            }
            if (!i) {
                if ("object" != typeof r || "object" != typeof t) return !1;
                var o = r.constructor,
                    f = t.constructor;
                if (o !== f && !(p(o) && o instanceof o && p(f) && f instanceof f) && "constructor" in r && "constructor" in t) return !1
            }
            e = e || [];
            u = u || [];
            var a = e.length;
            for (; a--;)
                if (e[a] === r) return u[a] === t;
            e.push(r);
            u.push(t);
            if (i) {
                if ((a = r.length) !== t.length) return !1;
                for (; a--;)
                    if (!mn(r[a], t[a], e, u)) return !1
            } else {
                var c, l = b(r);
                if (a = l.length, b(t).length !== a) return !1;
                for (; a--;)
                    if (c = l[a], !y(t, c) || !mn(r[c], t[c], e, u)) return !1
            }
            e.pop();
            u.pop();
            return !0
        }(n, r, t, e)
    }

    function c(n) { if (!i(n)) return []; var r, t = []; for (r in n) t.push(r); return K && yn(n, t), t }

    function jn(e) {
        var u = g(e);
        return function(n) {
            if (null == n) return !1;
            var r = c(n);
            if (g(r)) return !1;
            for (var t = 0; t < u; t++)
                if (!p(n[e[t]])) return !1;
            return e !== wn || !p(n[_n])
        }
    }
    var _n = "forEach",
        r = ["clear", "delete"],
        u = ["get", "has", "set"],
        U = r.concat(_n, u),
        wn = r.concat(u),
        t = ["add"].concat(r, _n, "has"),
        u = f ? jn(U) : o("Map"),
        r = f ? jn(wn) : o("WeakMap"),
        U = f ? jn(t) : o("Set"),
        f = o("WeakSet");

    function j(n) { for (var r = b(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]]; return e }

    function An(n) { for (var r = {}, t = b(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e]; return r }

    function xn(n) { var r, t = []; for (r in n) p(n[r]) && t.push(r); return t.sort() }

    function Sn(a, c) {
        return function(n) {
            var r = arguments.length;
            if (c && (n = Object(n)), r < 2 || null == n) return n;
            for (var t = 1; t < r; t++)
                for (var e = arguments[t], u = a(e), i = u.length, o = 0; o < i; o++) {
                    var f = u[o];
                    c && void 0 !== n[f] || (n[f] = e[f])
                }
            return n
        }
    }
    var On = Sn(c),
        _ = Sn(b),
        Mn = Sn(c, !0);

    function En(n) {
        if (!i(n)) return {};
        if (z) return z(n);
        var r = function() {},
            n = (r.prototype = n, new r);
        return r.prototype = null, n
    }

    function Bn(n) { return v(n) ? n : [n] }

    function w(n) { return m.toPath(n) }

    function Nn(n, r) {
        for (var t = r.length, e = 0; e < t; e++) {
            if (null == n) return;
            n = n[r[e]]
        }
        return t ? n : void 0
    }

    function In(n, r, t) { n = Nn(n, w(r)); return H(n) ? t : n }

    function Tn(n) { return n }

    function A(r) {
        return r = _({}, r),
            function(n) { return dn(n, r) }
    }

    function kn(r) {
        return r = w(r),
            function(n) { return Nn(n, r) }
    }

    function x(u, i, n) {
        if (void 0 === i) return u;
        switch (null == n ? 3 : n) {
            case 1:
                return function(n) { return u.call(i, n) };
            case 3:
                return function(n, r, t) { return u.call(i, n, r, t) };
            case 4:
                return function(n, r, t, e) { return u.call(i, n, r, t, e) }
        }
        return function() { return u.apply(i, arguments) }
    }

    function Dn(n, r, t) { return null == n ? Tn : p(n) ? x(n, r, t) : (i(n) && !v(n) ? A : kn)(n) }

    function Rn(n, r) { return Dn(n, r, 1 / 0) }

    function S(n, r, t) { return m.iteratee !== Rn ? m.iteratee(n, r) : Dn(n, r, t) }

    function Fn() {}

    function Vn(n, r) { return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1)) }
    m.toPath = Bn, m.iteratee = Rn;
    var O = Date.now || function() { return (new Date).getTime() };

    function Pn(r) {
        function t(n) { return r[n] }
        var n = "(?:" + b(r).join("|") + ")",
            e = RegExp(n),
            u = RegExp(n, "g");
        return function(n) { return e.test(n = null == n ? "" : "" + n) ? n.replace(u, t) : n }
    }
    var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        qn = Pn(t),
        t = Pn(An(t)),
        Un = m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g },
        Wn = /(.)^/,
        zn = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        Ln = /\\|'|\r|\n|\u2028|\u2029/g;

    function $n(n) { return "\\" + zn[n] }
    var Cn = /^\s*(\w|\$)+\s*$/;
    var Kn = 0;

    function Jn(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        e = En(n.prototype), r = n.apply(e, u);
        return i(r) ? r : e
    }
    var M = l(function(u, i) {
            function o() { for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) t[e] = i[e] === f ? arguments[n++] : i[e]; for (; n < arguments.length;) t.push(arguments[n++]); return Jn(u, o, this, this, t) }
            var f = M.placeholder;
            return o
        }),
        Gn = (M.placeholder = m, l(function(r, t, e) { if (!p(r)) throw new TypeError("Bind must be called on a function"); var u = l(function(n) { return Jn(r, u, t, this, e.concat(n)) }); return u })),
        E = ln(g);

    function B(n, r, t, e) {
        if (e = e || [], r || 0 === r) { if (r <= 0) return e.concat(n) } else r = 1 / 0;
        for (var u = e.length, i = 0, o = g(n); i < o; i++) {
            var f = n[i];
            if (E(f) && (v(f) || fn(f)))
                if (1 < r) B(f, r - 1, t, e), u = e.length;
                else
                    for (var a = 0, c = f.length; a < c;) e[u++] = f[a++];
            else t || (e[u++] = f)
        }
        return e
    }
    var Hn = l(function(n, r) {
        var t = (r = B(r, !1, !1)).length;
        if (t < 1) throw new Error("bindAll must be passed function names");
        for (; t--;) {
            var e = r[t];
            n[e] = Gn(n[e], n)
        }
        return n
    });
    var Qn = l(function(n, r, t) { return setTimeout(function() { return n.apply(null, t) }, r) }),
        Xn = M(Qn, m, 1);

    function Yn(n) { return function() { return !n.apply(this, arguments) } }

    function Zn(n, r) { var t; return function() { return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t } }
    var nr = M(Zn, 2);

    function rr(n, r, t) {
        r = S(r, t);
        for (var e, u = b(n), i = 0, o = u.length; i < o; i++)
            if (r(n[e = u[i]], e, n)) return e
    }

    function tr(i) {
        return function(n, r, t) {
            r = S(r, t);
            for (var e = g(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
                if (r(n[u], u, n)) return u;
            return -1
        }
    }
    var er = tr(1),
        ur = tr(-1);

    function ir(n, r, t, e) {
        for (var u = (t = S(t, e, 1))(r), i = 0, o = g(n); i < o;) {
            var f = Math.floor((i + o) / 2);
            t(n[f]) < u ? i = f + 1 : o = f
        }
        return i
    }

    function or(i, o, f) {
        return function(n, r, t) {
            var e = 0,
                u = g(n);
            if ("number" == typeof t) 0 < i ? e = 0 <= t ? t : Math.max(t + u, e) : u = 0 <= t ? Math.min(t + 1, u) : t + u + 1;
            else if (f && t && u) return n[t = f(n, r)] === r ? t : -1;
            if (r != r) return 0 <= (t = o(a.call(n, e, u), an)) ? t + e : -1;
            for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i)
                if (n[t] === r) return t;
            return -1
        }
    }
    var fr = or(1, er, ir),
        ar = or(-1, ur);

    function cr(n, r, t) { r = (E(n) ? er : rr)(n, r, t); if (void 0 !== r && -1 !== r) return n[r] }

    function N(n, r, t) {
        if (r = x(r, t), E(n))
            for (u = 0, i = n.length; u < i; u++) r(n[u], u, n);
        else
            for (var e = b(n), u = 0, i = e.length; u < i; u++) r(n[e[u]], e[u], n);
        return n
    }

    function I(n, r, t) {
        r = S(r, t);
        for (var e = !E(n) && b(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var f = e ? e[o] : o;
            i[o] = r(n[f], f, n)
        }
        return i
    }

    function lr(p) {
        return function(n, r, t, e) {
            var u = 3 <= arguments.length,
                i = n,
                o = x(r, e, 4),
                f = t,
                a = !E(i) && b(i),
                c = (a || i).length,
                l = 0 < p ? 0 : c - 1;
            for (u || (f = i[a ? a[l] : l], l += p); 0 <= l && l < c; l += p) {
                var s = a ? a[l] : l;
                f = o(f, i[s], s, i)
            }
            return f
        }
    }
    var sr = lr(1),
        pr = lr(-1);

    function T(n, e, r) { var u = []; return e = S(e, r), N(n, function(n, r, t) { e(n, r, t) && u.push(n) }), u }

    function hr(n, r, t) { r = S(r, t); for (var e = !E(n) && b(n), u = (e || n).length, i = 0; i < u; i++) { var o = e ? e[i] : i; if (!r(n[o], o, n)) return !1 } return !0 }

    function vr(n, r, t) { r = S(r, t); for (var e = !E(n) && b(n), u = (e || n).length, i = 0; i < u; i++) { var o = e ? e[i] : i; if (r(n[o], o, n)) return !0 } return !1 }

    function k(n, r, t, e) { return E(n) || (n = j(n)), 0 <= fr(n, r, t = "number" == typeof t && !e ? t : 0) }
    var yr = l(function(n, t, e) {
        var u, i;
        return p(t) ? i = t : (t = w(t), u = t.slice(0, -1), t = t[t.length - 1]), I(n, function(n) {
            var r = i;
            if (!r) {
                if (null == (n = u && u.length ? Nn(n, u) : n)) return;
                r = n[t]
            }
            return null == r ? r : r.apply(n, e)
        })
    });

    function dr(n, r) { return I(n, kn(r)) }

    function gr(n, e, r) {
        var t, u, i = -1 / 0,
            o = -1 / 0;
        if (null == e || "number" == typeof e && "object" != typeof n[0] && null != n)
            for (var f = 0, a = (n = E(n) ? n : j(n)).length; f < a; f++) null != (t = n[f]) && i < t && (i = t);
        else e = S(e, r), N(n, function(n, r, t) { u = e(n, r, t), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u) });
        return i
    }
    var br = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;

    function mr(n) { return n ? v(n) ? a.call(n) : X(n) ? n.match(br) : E(n) ? I(n, Tn) : j(n) : [] }

    function jr(n, r, t) {
        if (null == r || t) return (n = E(n) ? n : j(n))[Vn(n.length - 1)];
        for (var e = mr(n), t = g(e), u = (r = Math.max(Math.min(r, t), 0), t - 1), i = 0; i < r; i++) {
            var o = Vn(i, u),
                f = e[i];
            e[i] = e[o], e[o] = f
        }
        return e.slice(0, r)
    }

    function D(i, r) {
        return function(t, e, n) {
            var u = r ? [
                [],
                []
            ] : {};
            return e = S(e, n), N(t, function(n, r) {
                r = e(n, r, t);
                i(u, n, r)
            }), u
        }
    }
    var _r = D(function(n, r, t) { y(n, t) ? n[t].push(r) : n[t] = [r] }),
        wr = D(function(n, r, t) { n[t] = r }),
        Ar = D(function(n, r, t) { y(n, t) ? n[t]++ : n[t] = 1 }),
        xr = D(function(n, r, t) { n[t ? 0 : 1].push(r) }, !0);

    function Sr(n, r, t) { return r in t }
    var Or = l(function(n, r) {
            var t = {},
                e = r[0];
            if (null == n) return t;
            p(e) ? (1 < r.length && (e = x(e, r[1])), r = c(n)) : (e = Sr, r = B(r, !1, !1), n = Object(n));
            for (var u = 0, i = r.length; u < i; u++) {
                var o = r[u],
                    f = n[o];
                e(f, o, n) && (t[o] = f)
            }
            return t
        }),
        Mr = l(function(n, t) { var r, e = t[0]; return p(e) ? (e = Yn(e), 1 < t.length && (r = t[1])) : (t = I(B(t, !1, !1), String), e = function(n, r) { return !k(t, r) }), Or(n, e, r) });

    function Er(n, r, t) { return a.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r))) }

    function Br(n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[0] : Er(n, n.length - r) }

    function R(n, r, t) { return a.call(n, null == r || t ? 1 : r) }
    var Nr = l(function(n, r) { return r = B(r, !0, !0), T(n, function(n) { return !k(r, n) }) }),
        Ir = l(function(n, r) { return Nr(n, r) });

    function Tr(n, r, t, e) {
        Q(r) || (e = t, t = r, r = !1), null != t && (t = S(t, e));
        for (var u = [], i = [], o = 0, f = g(n); o < f; o++) {
            var a = n[o],
                c = t ? t(a, o, n) : a;
            r && !t ? (o && i === c || u.push(a), i = c) : t ? k(i, c) || (i.push(c), u.push(a)) : k(u, a) || u.push(a)
        }
        return u
    }
    var kr = l(function(n) { return Tr(B(n, !0, !0)) });

    function Dr(n) { for (var r = n && gr(n, g).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = dr(n, e); return t }
    var Rr = l(Dr);

    function Fr(n, r) { return n._chain ? m(r).chain() : r }

    function Vr(t) {
        return N(xn(t), function(n) {
            var r = m[n] = t[n];
            m.prototype[n] = function() { var n = [this._wrapped]; return P.apply(n, arguments), Fr(this, r.apply(m, n)) }
        }), m
    }
    N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(r) {
        var t = e[r];
        m.prototype[r] = function() { var n = this._wrapped; return null != n && (t.apply(n, arguments), "shift" !== r && "splice" !== r || 0 !== n.length || delete n[0]), Fr(this, n) }
    }), N(["concat", "join", "slice"], function(n) {
        var r = e[n];
        m.prototype[n] = function() { var n = this._wrapped; return Fr(this, n = null != n ? r.apply(n, arguments) : n) }
    });
    n = Vr({
        __proto__: null,
        VERSION: n,
        restArguments: l,
        isObject: i,
        isNull: function(n) { return null === n },
        isUndefined: H,
        isBoolean: Q,
        isElement: function(n) { return !(!n || 1 !== n.nodeType) },
        isString: X,
        isNumber: Y,
        isDate: Z,
        isRegExp: nn,
        isError: rn,
        isSymbol: tn,
        isArrayBuffer: en,
        isDataView: h,
        isArray: v,
        isFunction: p,
        isArguments: fn,
        isFinite: function(n) { return !tn(n) && C(n) && !isNaN(parseFloat(n)) },
        isNaN: an,
        isTypedArray: vn,
        isEmpty: function(n) { if (null == n) return !0; var r = g(n); return "number" == typeof r && (v(n) || X(n) || fn(n)) ? 0 === r : 0 === g(b(n)) },
        isMatch: dn,
        isEqual: function(n, r) { return mn(n, r) },
        isMap: u,
        isWeakMap: r,
        isSet: U,
        isWeakSet: f,
        keys: b,
        allKeys: c,
        values: j,
        pairs: function(n) { for (var r = b(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [r[u], n[r[u]]]; return e },
        invert: An,
        functions: xn,
        methods: xn,
        extend: On,
        extendOwn: _,
        assign: _,
        defaults: Mn,
        create: function(n, r) { return n = En(n), r && _(n, r), n },
        clone: function(n) { return i(n) ? v(n) ? n.slice() : On({}, n) : n },
        tap: function(n, r) { return r(n), n },
        get: In,
        has: function(n, r) {
            for (var t = (r = w(r)).length, e = 0; e < t; e++) {
                var u = r[e];
                if (!y(n, u)) return !1;
                n = n[u]
            }
            return !!t
        },
        mapObject: function(n, r, t) {
            r = S(r, t);
            for (var e = b(n), u = e.length, i = {}, o = 0; o < u; o++) {
                var f = e[o];
                i[f] = r(n[f], f, n)
            }
            return i
        },
        identity: Tn,
        constant: cn,
        noop: Fn,
        toPath: Bn,
        property: kn,
        propertyOf: function(r) { return null == r ? Fn : function(n) { return In(r, n) } },
        matcher: A,
        matches: A,
        times: function(n, r, t) {
            var e = Array(Math.max(0, n));
            r = x(r, t, 1);
            for (var u = 0; u < n; u++) e[u] = r(u);
            return e
        },
        random: Vn,
        now: O,
        escape: qn,
        unescape: t,
        templateSettings: Un,
        template: function(i, n, r) {
            n = Mn({}, n = !n && r ? r : n, m.templateSettings);
            var t, r = RegExp([(n.escape || Wn).source, (n.interpolate || Wn).source, (n.evaluate || Wn).source].join("|") + "|$", "g"),
                o = 0,
                f = "__p+='";
            if (i.replace(r, function(n, r, t, e, u) { return f += i.slice(o, u).replace(Ln, $n), o = u + n.length, r ? f += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : t ? f += "'+\n((__t=(" + t + "))==null?'':__t)+\n'" : e && (f += "';\n" + e + "\n__p+='"), n }), f += "';\n", r = n.variable) { if (!Cn.test(r)) throw new Error("variable is not a bare identifier: " + r) } else f = "with(obj||{}){\n" + f + "}\n", r = "obj";
            f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
            try { t = new Function(r, "_", f) } catch (n) { throw n.source = f, n }

            function e(n) { return t.call(this, n, m) }
            return e.source = "function(" + r + "){\n" + f + "}", e
        },
        result: function(n, r, t) {
            var e = (r = w(r)).length;
            if (!e) return p(t) ? t.call(n) : t;
            for (var u = 0; u < e; u++) {
                var i = null == n ? void 0 : n[r[u]];
                void 0 === i && (i = t, u = e), n = p(i) ? i.call(n) : i
            }
            return n
        },
        uniqueId: function(n) { var r = ++Kn + ""; return n ? n + r : r },
        chain: function(n) { return (n = m(n))._chain = !0, n },
        iteratee: Rn,
        partial: M,
        bind: Gn,
        bindAll: Hn,
        memoize: function(e, u) {
            function i(n) {
                var r = i.cache,
                    t = "" + (u ? u.apply(this, arguments) : n);
                return y(r, t) || (r[t] = e.apply(this, arguments)), r[t]
            }
            return i.cache = {}, i
        },
        delay: Qn,
        defer: Xn,
        throttle: function(t, e, u) {
            function i() { l = !1 === u.leading ? 0 : O(), o = null, c = t.apply(f, a), o || (f = a = null) }

            function n() {
                var n = O(),
                    r = (l || !1 !== u.leading || (l = n), e - (n - l));
                return f = this, a = arguments, r <= 0 || e < r ? (o && (clearTimeout(o), o = null), l = n, c = t.apply(f, a), o || (f = a = null)) : o || !1 === u.trailing || (o = setTimeout(i, r)), c
            }
            var o, f, a, c, l = 0;
            return u = u || {}, n.cancel = function() { clearTimeout(o), l = 0, o = f = a = null }, n
        },
        debounce: function(r, t, e) {
            function u() {
                var n = O() - o;
                n < t ? i = setTimeout(u, t - n) : (i = null, e || (a = r.apply(c, f)), i || (f = c = null))
            }
            var i, o, f, a, c, n = l(function(n) { return c = this, f = n, o = O(), i || (i = setTimeout(u, t), e && (a = r.apply(c, f))), a });
            return n.cancel = function() { clearTimeout(i), i = f = c = null }, n
        },
        wrap: function(n, r) { return M(r, n) },
        negate: Yn,
        compose: function() {
            var t = arguments,
                e = t.length - 1;
            return function() { for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r); return r }
        },
        after: function(n, r) { return function() { if (--n < 1) return r.apply(this, arguments) } },
        before: Zn,
        once: nr,
        findKey: rr,
        findIndex: er,
        findLastIndex: ur,
        sortedIndex: ir,
        indexOf: fr,
        lastIndexOf: ar,
        find: cr,
        detect: cr,
        findWhere: function(n, r) { return cr(n, A(r)) },
        each: N,
        forEach: N,
        map: I,
        collect: I,
        reduce: sr,
        foldl: sr,
        inject: sr,
        reduceRight: pr,
        foldr: pr,
        filter: T,
        select: T,
        reject: function(n, r, t) { return T(n, Yn(S(r)), t) },
        every: hr,
        all: hr,
        some: vr,
        any: vr,
        contains: k,
        includes: k,
        include: k,
        invoke: yr,
        pluck: dr,
        where: function(n, r) { return T(n, A(r)) },
        max: gr,
        min: function(n, e, r) {
            var t, u, i = 1 / 0,
                o = 1 / 0;
            if (null == e || "number" == typeof e && "object" != typeof n[0] && null != n)
                for (var f = 0, a = (n = E(n) ? n : j(n)).length; f < a; f++) null != (t = n[f]) && t < i && (i = t);
            else e = S(e, r), N(n, function(n, r, t) {
                ((u = e(n, r, t)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
            });
            return i
        },
        shuffle: function(n) { return jr(n, 1 / 0) },
        sample: jr,
        sortBy: function(n, e, r) {
            var u = 0;
            return e = S(e, r), dr(I(n, function(n, r, t) { return { value: n, index: u++, criteria: e(n, r, t) } }).sort(function(n, r) {
                var t = n.criteria,
                    e = r.criteria;
                if (t !== e) { if (e < t || void 0 === t) return 1; if (t < e || void 0 === e) return -1 }
                return n.index - r.index
            }), "value")
        },
        groupBy: _r,
        indexBy: wr,
        countBy: Ar,
        partition: xr,
        toArray: mr,
        size: function(n) { return null == n ? 0 : (E(n) ? n : b(n)).length },
        pick: Or,
        omit: Mr,
        first: Br,
        head: Br,
        take: Br,
        initial: Er,
        last: function(n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[n.length - 1] : R(n, Math.max(0, n.length - r)) },
        rest: R,
        tail: R,
        drop: R,
        compact: function(n) { return T(n, Boolean) },
        flatten: function(n, r) { return B(n, r, !1) },
        without: Ir,
        uniq: Tr,
        unique: Tr,
        union: kr,
        intersection: function(n) {
            for (var r = [], t = arguments.length, e = 0, u = g(n); e < u; e++) {
                var i = n[e];
                if (!k(r, i)) {
                    for (var o = 1; o < t && k(arguments[o], i); o++);
                    o === t && r.push(i)
                }
            }
            return r
        },
        difference: Nr,
        unzip: Dr,
        transpose: Dr,
        zip: Rr,
        object: function(n, r) { for (var t = {}, e = 0, u = g(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1]; return t },
        range: function(n, r, t) { null == r && (r = n || 0, n = 0), t = t || (r < n ? -1 : 1); for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) u[i] = n; return u },
        chunk: function(n, r) { if (null == r || r < 1) return []; for (var t = [], e = 0, u = n.length; e < u;) t.push(a.call(n, e, e += r)); return t },
        mixin: Vr,
        default: m
    });
    return n._ = n
});