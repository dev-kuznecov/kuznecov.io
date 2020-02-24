<script lang="ts">
    import { createComponent, watch, reactive } from '@vue/composition-api'
    import { useQuery, useResult, useSubscription } from '@vue/apollo-composable'
    import ChatQuery from '~/apollo/queries/chat.graphql'
    import MessageSentSubscribe from '~/apollo/subscriptions/message-sent.graphql'

    import { Chat, ChatsQuery, ChatsQueryVariables } from '~/types/types'

    import ChatList from './ChatList.vue'
    import ChatForm from './ChatForm.vue'

    interface ChatState {
    	load: Boolean,
	    buffer: Chat[],
	    news: Chat[],
	    own: Number[],
    }

    export default createComponent({
        components: {
            ChatList,
            ChatForm,
        },
        setup() {
	        const state = reactive<ChatState>({
		        load: false,
		        buffer: [],
		        own: [],
		        news: []
	        })

            const { result: chats } = useQuery<ChatsQuery, ChatsQueryVariables>(ChatQuery, {}),
	            messages = useResult(chats)

            const { result: subscribe } = useSubscription(MessageSentSubscribe)

            watch(subscribe, data => {
	            state.load ? state.buffer.push(data.messageSent) : state.news.push(data.messageSent)
            }, {
            	lazy: true
            })
	        
            function addOwn(message: Chat) : void {
	            state.own.push(message.id)

	            if(state.buffer.length) {
	            	for(const chat of state.buffer) {
			            state.news.push(chat)
		            }

		            state.buffer.splice(0, state.buffer.length)
	            }
            }

            function setLoad(status: boolean) : void {
	            state.load = status
            }

            return {
	        	...state,
                messages,
	            setLoad,
	            addOwn,
            }
        }
    })
</script>

<template>
    <div class="chat">
        <div class="chat__container">
            <div class="chat__list">
                <chat-list :items="messages" :new-items="news" :own="own" />
            </div>
            <div class="chat__form">
                <chat-form @send-message="addOwn" @send-load="setLoad"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .chat {
        $b: '.chat';

        flex-direction: column;
        justify-content: space-between;
    }
</style>