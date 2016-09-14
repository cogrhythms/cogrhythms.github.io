---
layout: default
title: People - Faculty
---

# People: Faculty

Click on a name to view or hide details.

Last update: 10 December 2012

## Director

<div class="panel-group" id="accordion0" role="tablist" aria-multiselectable="true">
  {% assign iPerson = 1 %}
  
  {% for person in site.data.faculty.director %}
  
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading{{iPerson}}">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion0" href="#collapse{{iPerson}}" aria-expanded="false" aria-controls="collapse{{iPerson}}">
          {{person.name}}
        </a>
      </h4>
    </div>
    <div id="collapse{{iPerson}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{iPerson}}">
      <div class="panel-body">
        <b>{{person.inst}}</b> <br>
        {{person.bio}}
      </div>
    </div>
  </div>
  
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% endfor %}
  
</div>

## Executive Committee

<div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% for person in site.data.faculty.executive_committee %}
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading{{iPerson}}">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapse{{iPerson}}" aria-expanded="false" aria-controls="collapse{{iPerson}}">
          {{person.name}}
        </a>
      </h4>
    </div>
    <div id="collapse{{iPerson}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{iPerson}}">
      <div class="panel-body">
        <b>{{person.inst}}</b> <br>
        {{person.bio}}
      </div>
    </div>
  </div>
  
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% endfor %}
  
</div>

## Affiliated Faculty

<div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% for person in site.data.faculty.affiliated %}
  
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading{{iPerson}}">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapse{{iPerson}}" aria-expanded="false" aria-controls="collapse{{iPerson}}">
          {{person.name}}
        </a>
      </h4>
    </div>
    <div id="collapse{{iPerson}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{iPerson}}">
      <div class="panel-body">
        <b>{{person.inst}}</b> <br>
        {{person.bio}}
      </div>
    </div>
  </div>
  
  {% assign iPerson = iPerson | plus: 1 %}
  
  {% endfor %}
  
</div>
