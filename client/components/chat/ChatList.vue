<script lang="ts">
    import { createComponent, watch, ref, onMounted, computed } from '@vue/composition-api'
    import VueScroll, { Config } from 'vuescroll'

    export default createComponent({
        props: {
            items: {
                type: Array,
	            default: () => ([])
            },
	        newItems: {
		        type: Array,
		        default: () => ([])
	        },
	        own: {
            	type: Array,
		        default: () => ([])
	        }
        },
        components: {
            VueScroll,
        },
        setup(props: any) {
        	const messages = computed(() => ([...props.items, ...props.newItems]))

            const scrollBar = ref<VueScroll>(null)
            const scrollOptions: Config = {
                scrollPanel: {
                	speed: 0,
                    initialScrollX: false
                },
                bar: {
                    background: '#e83953',
                    keepShow: true
                }
            }

            onMounted(() => {
                updateScroll()
            })

            function updateScroll() {
            	if(scrollBar.value) {
		            scrollBar.value.scrollTo({
			            y: '100%'
		            }, true)
	            }
            }

            return {
	            messages,
	            updateScroll,
                scrollBar,
                scrollOptions,
            }
        }
    })
</script>

<template>
    <div class="chat-list">
        <div v-if="!messages.length" class="chat-list__empty">Нет сообщений, станьте первым!</div>
        <vue-scroll ref="scrollBar" @handle-resize="updateScroll()" :ops="scrollOptions" class="chat-list__wrapper">
            <div class="chat-list__messages">
                <div v-for="item in messages" :key="item.id" :class="[{ 'chat-list__item--own': own.some(id => id === item.id) }]" class="chat-list__item">
                    <div class="chat-list__author">
	                    <span v-if="own.some(id => id === item.id)">Вы</span>
	                    <span v-else>{{ item.from }}</span>
                    </div>
                    <div class="chat-list__message" v-text="item.message"></div>
                </div>
            </div>
        </vue-scroll>
    </div>
</template>

<style lang="scss">
    .chat-list {
        $b: '.chat-list';
        height: calc(100vh - 300px);
        min-height: 200px;
        max-height: 400px;
        background-color: $c-bg-block;
        border-radius: $b-radius;
        margin-bottom: $g;
        padding: $g;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: $g;
            right: 0;
            left: 0;
            height: $g * 2;
            background-image: linear-gradient(to bottom, rgba($c-bg-block, 1), rgba($c-bg-block, 0));
            z-index: 5;
        }

        &__empty {
            position: relative;
            z-index: 5;
        }

        &__wrapper {
            height: 100%;
            overflow: hidden;
        }

        &__messages {
	        padding-right: 48px;
        }

        &__item {
            margin-bottom: $g / 2;
            overflow: hidden;
            width: 100%;

            &:last-child {
                margin-bottom: 0;
            }

	        &--own {
		        display: flex;
		        flex-direction: column;
		        align-items: flex-end;
		        
		        #{$b}__message {
			        background-color: $c-hover;
			        color: #fff;
		        }
	        }
        }

        &__author {
            padding: 0 $g / 2;
            font-size: 12px;
            font-weight: 600;
            color: $c-hover;
            margin-bottom: 6px;
        }

        &__message {
            max-width: 80%;
            display: inline-block;
            background-color: $c-bg-element;
            padding: 4px $g / 2;
            border-radius: 20px;
            font-size: 14px;
            white-space: pre-line;
            word-break: break-all;
        }
    }
</style>