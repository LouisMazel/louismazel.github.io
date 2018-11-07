<template>
  <div
    id="LeafletMovingMarker"
    class="leaflet-moving-marker flex w-100 h-100">
    <l-map
      ref="driversMap"
      :zoom="mapData.zoom"
      :max-zoom="mapData.maxZoom"
      :min-zoom="mapData.minZoom"
      :options="mapData.options"
      :center="mapData.center"
      class="leaflet-map flex-1">
      <l-tile-layer
        :url="mapData.url"
        :attribution="mapData.attribution"
      />
      <l-feature-group ref="markers">
        <l-moving-marker
          v-for="driver in drivers"
          :key="driver.id"
          :icon="getIcon(driver)"
          :lat-lng="getLocation(driver)"
          :duration="1500"
        />
      </l-feature-group>
    </l-map>
  </div>
</template>

<script>
  import LMovingMarker from 'vue2-leaflet-movingmarker'
  import {
    LMap,
    LMarker,
    LTileLayer,
    LFeatureGroup
  } from 'vue2-leaflet'

  function generateRandomPoints (center, radius, count) {
    var points = []
    for (var i = 0; i < count; i++) {
      points.push(generateRandomPoint(center, radius, i))
    }
    return points
  }

  function generateRandomPoint (center, radius, index) {
    var x0 = center.lng
    var y0 = center.lat
    // Convert Radius from meters to degrees.
    var rd = radius / 111300

    var u = Math.random()
    var v = Math.random()

    var w = rd * Math.sqrt(u)
    var t = 2 * Math.PI * v
    var x = w * Math.cos(t)
    var y = w * Math.sin(t)

    var xp = x / Math.cos(y0)

    // Resulting point.
    return { lat: y + y0, lng: xp + x0, id: index }
  }

  export default {
    name: 'LeafletMovingMarker',
    components: {
      LMovingMarker,
      LMap,
      LMarker,
      LTileLayer,
      LFeatureGroup
    },
    data () {
      return {
        drivers: generateRandomPoints({ lat: 48.86, lng: 2.34 }, 1000, Math.floor(Math.random() * 31) + 20),
        mapData: {
          zoom: 10,
          maxZoom: 14,
          minZoom: 2,
          options: {
            zoomControl: false,
            keyboard: false
          },
          controlZoomPosition: 'bottomright',
          center: [48.8664982, 2.3348235],
          attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
          url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
        },
        L: null
      }
    },
    created () {
      this.L = window.L
      setInterval(() => {
        this.drivers.forEach((driver) => {
          const { lat, lng } = generateRandomPoint({ lat: 48.86, lng: 2.34 }, 1000)
          driver.lat = lat
          driver.lng = lng
        })
      }, 2000)
    },
    methods: {
      getLocation (driver) {
        return [driver.lat, driver.lng]
      },
      getIcon () {
        setTimeout(() => {
          this.zoomToMarkers()
        }, 500)
        return this.L.icon({
          iconUrl: 'https://s3-eu-west-1.amazonaws.com/ct-documents/emails/A-static.png',
          iconSize: [21, 31],
          iconAnchor: [10.5, 31],
          popupAnchor: [4, -25]
        })
      },
      zoomToMarkers () {
        try {
          if (this.$refs.driversMap) {
            const map = this.$refs.driversMap.mapObject
            const markers = this.$refs.markers.mapObject
            if (map && markers) {
              map.flyToBounds(markers.getBounds(), {
                animate: true,
                padding: [32, 32],
                duration: 0.8
              })
            }
          }
        } catch (e) {
          console.error('Could not zoom to the marker.', e)
        }
      }
    }
  }
</script>
