<template>
    <article class="user-post">
        <h3>
            {{ post.title }}
        </h3>

        <p class="user-post__description">
            {{ post.body }}
        </p>

        <div class="user-post__footer">
            <div class="user-post__reactions">
                <div class="user-post__controls">
                    <span class="user-post__reaction">
                        <Icon :name="ICON_NAMES.like"/>
                        <span>
                            {{ post.reactions.likes || 0 }}
                        </span>
                    </span>

                    <span class="user-post__reaction">
                        <Icon :name="ICON_NAMES.dislike"/>
                        <span>
                            {{ post.reactions.dislikes || 0 }}
                        </span>
                    </span>
                </div>

                <span class="user-post__reaction">
                    <Icon :name="ICON_NAMES.view"/>
                    <span>
                        {{ post.reactions.dislikes || 0 }}
                    </span>
                </span>
            </div>
        </div>
    </article>
</template>

<script setup>
const ICON_NAMES = {
    like: 'lucide:thumbs-up',
    dislike: 'lucide:thumbs-down',
    view: 'lucide:eye'
}

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.user-post {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    min-height: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &__description {
        font-size: 16px;
        color: gray;
    }

    &__footer {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        display: flex;
        background-color: #f0f0f0;
    }

    &__controls {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__reactions {
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        height: 100%;
        width: 100%;
    }

    &__reaction {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>