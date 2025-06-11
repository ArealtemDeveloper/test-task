<template>
    <div class="user-info">
        <div 
            v-for="field in formattedInfo"
            :key="field.id"
            class="user-info__container"
        >
            <div class="user-info__wrapper">
                <span class="user-info__label">
                    {{ field.label }}
                </span>

                <span class="user-info__value">
                    {{ field.val }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const USER_INFO_FIELDS = {
    name: {
        id: 1,
        label: 'Имя:',
    },
    surname: {
        id: 2,
        label: 'Фамилия:',
    },
    email: {
        id: 3,
        label: 'E-mail:',
    },
};

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});

const formattedInfo = computed(() => {
    return [
        {
            ...USER_INFO_FIELDS.name,
            val: props.info.firstName,
        },
        {
            ...USER_INFO_FIELDS.surname,
            val: props.info.lastName,
        },
        {
            ...USER_INFO_FIELDS.email,
            val: props.info.email,
        }
    ]
})
</script>

<style lang="scss" scoped>
    .user-info {
        &__container {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        &__wrapper {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        &__label {
            font-size: 18px;
            font-weight: 600;
        }

        &__value {
            font-size: 18px;
            font-weight: 400;
        }
    }
</style>