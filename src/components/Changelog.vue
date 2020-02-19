<template>
	<div>
		<h1>Changelog</h1>
		<br>
<!--		<h3>Todo list*</h3>-->
<!--		<ul>-->
<!--			<li>Customization gossip hints</li>-->
<!--		</ul>-->
		<br>
		<h3>VERSION 2.3.2<span class="badge badge-danger">New</span></h3>
		<ul>
			<li>Add license information</li>
			<li>Add link to github</li>
		</ul>
		<h3>VERSION 2.3.1</h3>
		<ul>
			<li>Fix some english mistakes</li>
			<li>More space for gossip region</li>
			<li>Fix bug when remove element hash, the "?" didn't appear</li>
			<li>Change designation for barren item and major item.</li>
		</ul>
		<h3>VERSION 2.3.0</h3>
		<ul>
			<li>First version of gossip stones : You can insert hint for all gossips stones</li>
			<li>Create two categories for all dungeons : child and adult</li>
			<li>Remove "Usually" and replace to 3 categories : "Hash & Hints", "Stones & Medallions" and "Songs"</li>
		</ul>
		<h3>VERSION 2.2.1</h3>
		<ul>
			<li>Fix menu position, it was not same result as local</li>
		</ul>
		<h3>VERSION 2.2.0</h3>
		<ul>
			<li>Reworking css for responsiveness</li>
			<li>This website can be used on mobile/tablet, it's responsive</li>
		</ul>
		<h3>VERSION 2.1.3</h3>
		<ul>
			<li>Add About page</li>
			<li>Fix bottom buttons position</li>
		</ul>
		<h3>VERSION 2.1.2</h3>
		<ul>
			<li>New design for all select</li>
			<li>Customization hash seed</li>
		</ul>
		<h3>VERSION 2.1.1</h3>
		<ul>
			<li>Import of existing plando is now available</li>
			<li>Generating plando 5.x (dev and release) compatible</li>
			<li>Removing some console errors</li>
		</ul>
		<h3>VERSION 2.1</h3>
		<ul>
			<li>Removing back-end server and save system</li>
		</ul>
		<h3>VERSION BETA 2.0.6</h3>
		<ul>
			<li>Removing Skull Mask double location</li>
		</ul>
		<h3>VERSION BETA 2.0.5</h3>
		<ul>
			<li>Fixing bug, can't open GTG</li>
		</ul>
		<h3>VERSION BETA 2.0.4</h3>
		<ul>
			<li>Download plando don't add locations</li>
			<li>Removing page numbering when there is only one page</li>
		</ul>
		<h3>VERSION BETA 2.0.3</h3>
		<ul>
			Nothing, just for me
		</ul>
		<h3>VERSION BETA 2.0.2</h3>
		<ul>
			<li>Bugfix : If you fill a location with a blank item, it is removed of the list when you download the
				plando
			</li>
		</ul>
		<h3>VERSION BETA 2.0.1</h3>
		<ul>
			<li>Removing double locations</li>
			<li>Creating page without signup</li>
			<li>Add item_pool in json generated (resolve plando errors with bottle and trade item for example)</li>
			<li>Creating page version</li>
		</ul>
		<small>*Todo list is features I want to implement but which are not guaranteed to be developed?</small>
	</div>
</template>

<script>
	export default {
		name: "Changelog"
	}
</script>
