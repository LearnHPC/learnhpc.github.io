# European Environment for Scientific Software Installations

The European Environment for Scientific Software Installations
([EESSI](https://www.eessi-hpc.org/), pronounced "easy") is a collaboration between a
number of
[academic and industrial partners in the HPC community](https://eessi.github.io/docs/partners/).
Through the EESSI project, they want to set up a shared stack of scientific software
installations
to avoid not only duplicate work across HPC sites but also the execution of sub-optimal
applications on HPC resources.

They want to focus not only on the performance of the software, but also on automating
the workflow
for maintaining the software stack, thoroughly testing the installations, and
collaborating efficiently.

For end users, they want to provide a uniform user experience with respect to available
scientific
software, regardless of which system they use. The software stack is intended to work on
laptops,
personal workstations, HPC clusters and in the cloud, which means we will need to
support different
CPUs, networks, GPUs, and so on. We intend to make this work for any Linux
distribution, and a
wide variety of CPU architectures (Intel, AMD, ARM, POWER, RISC-V).

## Installing your own software

As the EESSI platform develops, we will expand the documentation to include the case
where you would like to install your software building upon the EESSI stack. Of course
you are always free to install your software however you see fit, but you should be
aware that (at least) two powerful tools exist to facilitate this,
[EasyBuild](https://easybuild.readthedocs.io/en/latest/) and
[Spack](https://spack.readthedocs.io/en/latest/).

### [EasyBuild](https://easybuild.readthedocs.io/en/latest/)

EasyBuild is a software build and installation framework that allows you to manage
(scientific) software on High 
Performance Computing (HPC) systems in an efficient way. It is motivated by the need
for a tool that combines the
following features: 

* a **flexible framework** for building/installing (scientific) software
* fully **automates** software builds
* divert from the standard ``configure`` / ``make`` / ``make install`` with custom procedures
* allows for easily **reproducing** previous builds
* keep the software build recipes/specifications **simple and human-readable**
* supports **co-existence of versions/builds** via dedicated installation prefix and module files
* enables **sharing** with the HPC community (win-win situation)
* automagic **dependency resolution**
* **retain logs** for traceability of the build processes

Since EasyBuild is what underpins the software applications of EESSI, you are likely to
find the integration with the EESSI to be extensive.

There is a one day introduction to EasyBuild at
[https://easybuilders.github.io/easybuild-tutorial/](https://easybuilders.github.io/easybuild-tutorial/)

### [Spack](https://spack.readthedocs.io/en/latest/)

Spack is a package management tool designed to support multiple versions and
configurations of software on a wide variety of platforms and environments. It was
designed for large supercomputing centers, where many users and application teams share
common installations of software on clusters with exotic architectures, using libraries
that do not have a standard ABI. Spack is non-destructive: installing a new version does
not break existing installations, so many configurations can coexist on the same system.

You can find a one-day introduction to Spack tutorial at
[https://spack-tutorial.readthedocs.io/en/latest/](https://spack-tutorial.readthedocs.io/en/latest/)
