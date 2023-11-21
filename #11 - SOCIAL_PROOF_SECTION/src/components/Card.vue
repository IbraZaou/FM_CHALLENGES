<script>
export default {
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    name: 'Colton Smith',
                    role: 'Verified Buyer',
                    testimony: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
                    img: 'https://randomuser.me/api/portraits/men/1.jpg'
                },
                {
                    id: 2,
                    name: 'Irene Roberts',
                    role: 'Verified Buyer',
                    testimony: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery',
                    img: 'https://randomuser.me/api/portraits/women/10.jpg'
                },
                {
                    id: 3,
                    name: 'Anne Wallace',
                    role: 'Verified Buyer',
                    testimony: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
                    img: 'https://randomuser.me/api/portraits/women/2.jpg'
                },
            ]
        };
    }
};
</script>

<template>
    <div class="review-card" v-for="review in reviews" :key="review.id">
        <div class="container_profile">
            <img :src="review.img" alt="">
            <div class="name_role">
                <p>{{ review.name }}</p>
                <span>{{ review.role }}</span>
            </div>
        </div>

        <p>"{{ review.testimony }}"</p>
    </div>
</template>

<style scoped></style>
