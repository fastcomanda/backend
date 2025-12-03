const request = require('supertest')
const { expect } = require('chai')
const postOrders = require('../../fixtures/postOrders.json')

require('dotenv').config()

describe('Orders', () => {
    describe('POST /orders', () => {
        it('Deve retornar status 201 com uma mensagem de sucesso quando uma order for criada', async () => {
            const bodyOrders = { ...postOrders }

            const resposta = await request(process.env.BASE_URL)
                .post('/orders')
                .set('Content-Type', 'application/json')
                .send(bodyOrders)
           
            expect(resposta.status).to.equal(201)
            expect(resposta.body.message).to.equal('All good from create orders')
            expect(resposta.body.message).to.be.a('string')
        })
    })
})

