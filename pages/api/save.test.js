var request = require('supertest')
var server = 'http://localhost:3000'

var err = {
  missing: { error: 'Missing data' },
  incorrect: { error: 'Incorrect data' },
  server: { error: 'Server error' }
}

describe('POST /api/save bad data', () => {
  describe('empty POST body', () => {
    var data = {}
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('missing clicks prop', () => {
    var data = {
      poem: [1, 2, 3, 4, 5]
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('poem not Array', () => {
    var data1 = {
      poem: 'abc',
      clicks: 1
    }
    var data2 = {
      poem: { '1': 1, '2': 2 },
      clicks: 1
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/save').send(data2)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.type).toMatch(/json/i)
      res = await request(server).post('/api/save').send(data2)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.body).toEqual(err.missing)
      res = await request(server).post('/api/save').send(data2)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('empty poem prop', () => {
    var data = {
      poem: [],
      clicks: 1
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('too short poem', () => {
    var data = {
      poem: [1]
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('too long poem', () => {
    var data = {
      poem: [1, 2, 3, 4, 5, 6]
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('missing poem prop', () => {
    var data = {
      clicks: 1
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('empty clicks prop', () => {
    var data = {
      poem: [1, 2, 3, 4, 5],
      clicks: ''
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('clicks not Number', () => {
    var data1 = {
      poem: [1, 2, 3, 4, 5],
      clicks: 'a'
    }
    var data2 = {
      poem: [1, 2, 3, 4, 5],
      clicks: { '1': 1 }
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/save').send(data2)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.type).toMatch(/json/i)
      res = await request(server).post('/api/save').send(data2)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.body).toEqual(err.missing)
      res = await request(server).post('/api/save').send(data2)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('clicks is 0', () => {
    var data = {
      poem: [1, 2, 3, 4, 5],
      clicks: 0
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(err.missing)
    })
  })

  describe('incorrect poem format', () => {
    var data1 = {
      poem: [1, 2],
      clicks: 1
    }
    var data2 = {
      poem: [
        { id: 1, data: 'wrong' },
        { id: 2, data: 'wrong' }
      ],
      clicks: 1
    }
    var data3 = {
      poem: [
        { tweet_id: '1', text: 'wrong' },
        { tweet_id: '2', text: 'wrong' }
      ],
      clicks: 1
    }
    var data4 = {
      poem: [
        { tweet_id: 1, text: 1 },
        { tweet_id: 2, text: 2 }
      ],
      clicks: 1
    }
    it('returns 400', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/save').send(data2)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/save').send(data3)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/save').send(data4)
      expect(res.status).toBe(400)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.type).toMatch(/json/i)
      res = await request(server).post('/api/save').send(data2)
      expect(res.type).toMatch(/json/i)
      res = await request(server).post('/api/save').send(data3)
      expect(res.type).toMatch(/json/i)
      res = await request(server).post('/api/save').send(data4)
      expect(res.type).toMatch(/json/i)
    })
    it('returns error message', async () => {
      var res = await request(server).post('/api/save').send(data1)
      expect(res.body).toEqual(err.incorrect)
      res = await request(server).post('/api/save').send(data2)
      expect(res.body).toEqual(err.incorrect)
      res = await request(server).post('/api/save').send(data3)
      expect(res.body).toEqual(err.incorrect)
      res = await request(server).post('/api/save').send(data4)
      expect(res.body).toEqual(err.incorrect)
    })
  })
})

describe('POST /api/save good data', () => {
  var data = {
    poem: [
      { tweet_id: 5, text: 'Maybe you often get angry and say words' },
      { tweet_id: 6, text: 'Frog' },
      { tweet_id: 91, text: 'Leg Butt' }
    ],
    clicks: 808
  }

  describe('save poem', () => {
    it('returns 200', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.status).toBe(200)
    })
    it('returns format json', async () => {
      var res = await request(server).post('/api/save').send(data)
      expect(res.type).toMatch(/json/i)
    })
    it('returns saved poem uid', async () => {
      const res = await request(server).post('/api/save').send(data)
      expect(res.body).toEqual(
        expect.objectContaining({
          uid: expect.any(String)
        })
      )
    })
  })
})
