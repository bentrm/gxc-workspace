// Generated by CoffeeScript 1.9.3

/*
Copyright (c) 2012-2013 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
 */

/**
* Manages live events attached to component selectors. Used by Deft.mvc.ComponentSelector.
* @private
 */
Ext.define('Deft.mvc.ComponentSelectorListener', {
  requires: ['Deft.event.LiveEventBus'],
  constructor: function(config) {
    var component, i, len, ref;
    Ext.apply(this, config);
    if (this.componentSelector.live) {
      Deft.LiveEventBus.addListener(this.componentSelector.view, this.componentSelector.selector, this.eventName, this.fn, this.scope, this.options);
    } else {
      ref = this.componentSelector.components;
      for (i = 0, len = ref.length; i < len; i++) {
        component = ref[i];
        component.on(this.eventName, this.fn, this.scope, this.options);
      }
    }
    return this;
  },
  destroy: function() {
    var component, i, len, ref;
    if (this.componentSelector.live) {
      Deft.LiveEventBus.removeListener(this.componentSelector.view, this.componentSelector.selector, this.eventName, this.fn, this.scope);
    } else {
      ref = this.componentSelector.components;
      for (i = 0, len = ref.length; i < len; i++) {
        component = ref[i];
        component.un(this.eventName, this.fn, this.scope);
      }
    }
  }
});
