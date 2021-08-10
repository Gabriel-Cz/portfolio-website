<template>
    <div>
        <div class="contactForm">
            <form
              id="contactForm"
              action="https://formspree.io/f/mayadvzp"
              method="POST"
            >
              <div class="wrapper">
                <div class="label">
                    <label for="_replyto">Your email</label>
                </div>
                <div class="inputWrapper">
                    <input class="input"
                      type="email" 
                      name="_replyto"
                      placeholder="Email"
                    />
                </div>
              </div>
              <div class="wrapper">
                <div class="label">
                    <label for="message">Your message</label>
                </div>
                <div class="inputWrapper">
                    <textarea 
                      rows="10"
                      form="contactForm"
                      class="input textarea" 
                      name="message"
                      placeholder="Message"
                    >
                    </textarea>
                </div>
              </div>
              <div class="buttonWrapper">
                  <button class="submitButton" type="submit">Send</button>
              </div>
              <input type="hidden" name="_next" value="http://localhost:8080/" />
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheContactForm",
        data () {
            return {
                formEndpoint: process.env.FORM_ENDPOINT,
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$boxShadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
$buttonBoxShadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

$buttonBg: rgba($color: #448AFF, $alpha: 1);
$fontFamily: 'Libre Franklin', sans-serif;

.contactForm {
    z-index: 30;
    display: grid;
    place-items: center;
    box-shadow: $boxShadow;
    font-family: $fontFamily;
    form { 
        width: 90%;
    }
    .wrapper {
        margin: 20px 20px 20px 20px;
        display: grid;
        .label {
            text-align: center;
            padding: 15px 5px;
            color: rgba($color: rgb(0, 0, 0), $alpha: 1);
        }
        .inputWrapper {
            width: 100%;
            .input {
              margin-top: 10px;
              width: 100%;
              padding: 5px 5px;
              border-radius: 2.5px;
              font-family: $fontFamily;
              border: none;
              outline: none;
              border-bottom: 1px solid rgba($color: gray, $alpha: 0.5);
              resize: none;
              &:focus {
                  outline: none;
                  border-bottom: 1px solid rgba($color: blue, $alpha: 0.5);
              }
            }
        }
    }
    .buttonWrapper {
        display: flex;
        justify-content: center;
        margin: 30px 10px 20px 10px;
        .submitButton {
            background: $buttonBg;
            letter-spacing: 1px;
            font-size: large;
            padding: 7.5px 10px;
            border-radius: 3px;
            border: none;
            width: 100%;
            margin-left: 9px; 
            margin-right: 9px; 
            color: rgba($color: rgb(255, 255, 255), $alpha: 1);
            transition: ease-in-out 0.3s;
            &:hover {
                transition: ease-in-out 0.3s;
                cursor: pointer;
                background: rgba($color: #1d64df, $alpha: 1.0);
            }
    }
    }
}
</style>