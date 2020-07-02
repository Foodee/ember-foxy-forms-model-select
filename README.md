ember-foxy-forms-model-select
==============================================================================

[Short description of the addon.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-foxy-forms-model-select
```


Usage
------------------------------------------------------------------------------

Once this addon is installed, it can be used like any other form control by 
providing the @using variable.

```hbs
<Form @for={{model}} as |f|>
  <f.field @for='attribute' @using='model-select' />
  <f.field @for='record-array' @using='multiple-model-select' />
</Form>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
