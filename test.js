import test from 'ava'
import spltjn from './'

const str = 'one two three'

test('splitJoin is split then joined', t => {
  t.is(spltjn(str), 'one-two-three')
})

test('splitJoin with non-default args', t => {
  t.is(spltjn(str, 't', 'h'), 'one hwo hhree')  
})

test('splitJoin with regexes', t => {
  t.is(spltjn(str, /o/g, 'ee'), 'eene twee three')
})
