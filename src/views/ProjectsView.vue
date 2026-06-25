<template>
    <div>
        <div v-for="project in projects" :key="project.name">
            <ProjectEntry
                :name="project.name"
                :link="project.link"
                :date="project.date"
                :skills="project.skills"
                :description="project.description" />
        </div>
    </div>
</template>

<script setup>
import ProjectEntry from '@/components/ProjectEntry.vue'
import projects from '@/static/projects.mjs'
</script>
