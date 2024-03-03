<script setup>
const showSuccess = ref(false)
const error_msg = ref("")
const isLoading = ref(false)

async function submit(event) {
    error_msg.value = false
    isLoading.value = true

    const formElement = event.target
    const formData = new FormData(formElement)

    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: formData
        })
        showSuccess.value = true
    } catch {
        error_msg.value = "Message failed to send!"
        isLoading.value = false
    }
}

</script>

<template>
    <section class="contact" id="contact">
        <form @submit.prevent="submit">
            <h1>Contact Us</h1>
            <label for="name">Full Name</label>
            <input type="text" name="name" id="name" maxlength="70" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" maxlength="320" required>
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" maxlength="256" required>
            <label for="message">Message</label>
            <textarea type='text' name="message" id="message" maxlength="4000"
                style="height: 180px; min-height: 180px; max-height: 400px; resize: vertical;" required></textarea>
            <div class="controls">
                <div class="status" v-if="!!error_msg">
                    <img src="/images/ui/error.svg" />
                    <span>
                        {{ error_msg }}
                    </span>
                </div>
                <button class="standard" type="submit" value="Send Message" :disabled="isLoading">
                    <span v-if="!isLoading">Send Message</span>
                    <Icon v-else name="svg-spinners:3-dots-fade" size="1rem" />
                </button>
            </div>
        </form>
        <div class="success" :style="{ bottom: showSuccess ? '0%' : '-100%' }">
            <h1>Message sent!</h1>
            <Icon name="material-symbols-light:mark-email-read-outline-sharp" size="10rem" />
            <p>You'll hear back from us soon!</p>
        </div>
    </section>
</template>

<style>
.stack>.contact {
    position: relative;
    padding: 0 1rem 1rem;
    color: var(--g4);
    overflow: hidden;

    form {
        position: relative;
        max-width: 960px;
        margin: auto;
        overflow: hidden;
        transition: height 500ms ease-in-out;

        >h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: 900;
            color: var(--brand-purple);
            text-align: center;
            margin-top: 4rem;
            margin-bottom: 2rem;
        }

        >label {
            margin: 1.5rem .25rem .25rem;
            font-size: 1.2rem;
            font-weight: 300;
            display: block;
        }

        >input,
        >textarea {
            background-color: var(--g0);
            width: 100%;
            padding: .75rem 1rem;
            border: 1px solid var(--g2);
            border-radius: .5rem;
            transition: border 0.1s ease-in-out;
            outline: none;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;

            &:focus {
                outline: 2px solid #bbb;
            }
        }

        >.controls {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            >.status {
                font-size: 1rem;
                display: flex;
                overflow: hidden;
                /* height: 0px; */
                align-items: flex-start;

                >img {
                    margin-right: 6px;
                }
            }

            >button[type="submit"] {
                background-color: var(--brand-orange);
                color: white;
                border-color: var(--brand-orange-border);
                text-wrap: nowrap;
                margin-bottom: auto;
                margin-left: auto;
            }
        }
    }

    >.success {
        position: absolute;
        bottom: -100%;
        transition: bottom 500ms cubic-bezier(.23, .45, .61, 1);
        left: 0px;
        width: 100%;
        height: 100%;

        background-color: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        >h1 {
            font-weight: 700;
            font-size: 3rem;
            text-align: center;
        }

        >img {
            margin: 20px;
        }

        >p {
            font-size: 1.2rem;
        }
    }
}
</style>