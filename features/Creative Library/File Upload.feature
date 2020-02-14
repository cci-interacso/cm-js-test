@regression @cmv-99
Feature: Verfiy or restrict allowed creatives formats

    @test
    Scenario Outline: Scenario Outline name: upload valid creative formats
        When stan attempts to upload this <creative>
        Then stan upload is successful

        Examples:
            | creative    |
            | sample1.gif |
            | sample3.png |
            | sample3.svg |

    @test
    Scenario Outline: Scenario Outline name: upload invalid creative formats
        When stan attempts to upload this <creative>
        Then stan upload is not successful

        Examples:
            | creative        |
            | sampleVideo.3gp |
            | sampleaac.aac   |
            | barry.flv       |
            | avi.avi         |