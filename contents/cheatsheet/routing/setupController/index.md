---
title: "setupController"
description: "function that can be used to configure the controller"
arguments:
    controller: "required - controller object instantiated for this route"
    model: "optional - model(s) that were returned by route's model property"
tokens: [ "controller", "model" ]
template: index.jade
---

WARNING: Function assigned to this property has to set the model into the controller, otherwise the controller won’t have a model to use