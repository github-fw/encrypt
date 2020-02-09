<template>
  <div>
    <h1>在线加密解密</h1>
    <textarea placeholder="明文" v-model="plaintext" rows="10" cols="100" class="content">
    </textarea>
    <div class="text">
      <span>秘钥：<input v-model="secret" type="text"></span>
      <span class="btn" @click="encrypt">加密</span>
      <span class="btn" @click="decode">解密</span>
    </div>
    <textarea placeholder="密文" v-model="ciphertext" rows="10" cols="100" class="content">
    </textarea>
  </div>
</template>

<script>
import {aesEncrypt, aesDecrypt} from '../utils.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      plaintext: '',
      ciphertext: '',
      secret: ''
    }
  },
  methods: {
    encrypt() {
      this.ciphertext = aesEncrypt(this.plaintext, this.secret)
    },
    decode() {
      this.plaintext = aesDecrypt(this.ciphertext, this.secret)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
  width: 80%;
  max-width: 400px;
}
.text{
  width: 400px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 80px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: aquamarine;
  border-radius: 5px;
}
</style>
