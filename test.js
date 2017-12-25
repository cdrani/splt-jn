import test from 'ava'
import splitJoin from './'

let str = 'one two three'

test('splitJoin is split then joined', t => {
  t.is(splitJoin(str), 'one-two-three')
})

test('splitJoin with non-default args', t => {
  t.is(splitJoin(str, 't', 'h'), 'one hwo hhree')  
})

test('splitJoin with regexes', t => {
  t.is(splitJoin(str, /o/g, ee), 'eene twee three')
})
