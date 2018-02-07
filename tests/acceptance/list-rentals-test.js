import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('should list available rentals' function(assert){
  visit('/');
  andThen(function(){
    assert.equal(find('.listing').length, 3, 'U should see 3 items');
  });
});

test('should link to about page', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen( function(){
    assert.equal(currentURL(), '/about', 'should navigate to about')
  });
});

test('should link to contact page', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen( function(){
    assert.equal(currentURL(), '/contact', 'should navigate to contact')
  });
});